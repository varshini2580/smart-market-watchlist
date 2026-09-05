import { dashboardRepository } from "../repositories/dashboard.repository";
import { marketService } from "./market.service";
import { changeDetectionService } from "./change-detection.service";

export const dashboardService = {
  async getDashboard(userId: string) {
    const data =
      await dashboardRepository.getDashboard(userId);

    if (!data) {
      return null;
    }

    return formatDashboard(data);
  },

  /**
   * Refresh market data for all user stocks (only if stale),
   * run change detection, and return the updated dashboard.
   * This is the on-demand refresh endpoint called by the frontend.
   */
  async refreshAndDetect(userId: string) {
    const data =
      await dashboardRepository.getDashboard(userId);

    if (!data) {
      return null;
    }

    // Collect unique stocks across all watchlists
    const seen = new Set<string>();

    const stocksToRefresh = data.watchlists
      .flatMap((w) => w.items)
      .filter((item) => {
        const key = item.stock.id;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .map((item) => item.stock);

    // For each unique stock: refresh if stale, then detect
    for (const stock of stocksToRefresh) {
      try {
        await marketService.refreshIfStale(
          stock.symbol,
          stock.exchange
        );

        await changeDetectionService.detect(
          userId,
          stock.symbol,
          stock.exchange
        );
      } catch (err) {
        // Log but do not crash the whole refresh for one stock
        console.error(
          `Refresh/detect failed for ${stock.symbol}:`,
          err
        );
      }
    }

    // Re-fetch the dashboard with updated data
    const updated =
      await dashboardRepository.getDashboard(userId);

    if (!updated) return null;

    return formatDashboard(updated);
  },
};

/**
 * Shared formatting logic for dashboard data.
 */
function formatDashboard(
  data: Awaited<
    ReturnType<typeof dashboardRepository.getDashboard>
  >
) {
  if (!data) return null;

  const stocks = data.watchlists.flatMap((watchlist) =>
    watchlist.items.map((item) => ({
      watchlistItemId: item.id,
      watchlistId: watchlist.id,
      watchlistName: watchlist.name,

      stockId: item.stock.id,
      symbol: item.stock.symbol,
      name: item.stock.name,
      exchange: item.stock.exchange,

      intent: item.intent,
      purchasePrice: item.purchasePrice,
      targetPrice: item.targetPrice,

      currentPrice: item.stock.snapshots[0]?.price ?? null,

      marketTimestamp:
        item.stock.snapshots[0]?.marketTimestamp ?? null,

      fetchedAt:
        item.stock.snapshots[0]?.fetchedAt ?? null,

      addedAt: item.addedAt,
    }))
  );

  const attention = data.attentionEvents.map((event) => ({
    id: event.id,

    symbol: event.stock.symbol,
    name: event.stock.name,
    exchange: event.stock.exchange,

    type: event.type,
    severity: event.severity,

    previousPrice: event.previousPrice,
    currentPrice: event.currentPrice,
    changePercent: event.changePercent,

    marketTimestamp: event.snapshot.marketTimestamp,

    detectedAt: event.detectedAt,
  }));

  const highPriority = attention.filter(
    (event) => event.severity === "HIGH"
  ).length;

  return {
    user: {
      id: data.id,
      name: data.name,
      email: data.email,
    },

    stocks,

    attention,

    summary: {
      totalStocks: stocks.length,
      highPriority,
      attentionCount: attention.length,
    },
  };
}