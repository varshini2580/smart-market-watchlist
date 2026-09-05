import prisma from "../lib/prisma";
import { marketService } from "../services/market.service";
import { changeDetectionService } from "../services/change-detection.service";

/**
 * Background market monitor job.
 * Uses refreshIfStale so it does NOT call the external API
 * if the data was already refreshed within the freshness window.
 */
export const marketMonitorJob = async () => {
  console.log("[market-monitor] Starting background monitor...");

  try {
    const users = await prisma.user.findMany({
      include: {
        watchlists: {
          include: {
            items: {
              include: {
                stock: true,
              },
            },
          },
        },
      },
    });

    // Deduplicate stocks — only monitor each stock once even if
    // multiple users watch the same stock (data fetching is stock-level)
    const seenStocks = new Set<string>();

    for (const user of users) {
      for (const watchlist of user.watchlists) {
        for (const item of watchlist.items) {
          try {
            const symbol = item.stock.symbol;
            const exchange = item.stock.exchange;
            const stockKey = `${symbol}:${exchange}`;

            // Fetch market data only once per stock (not once per user)
            if (!seenStocks.has(stockKey)) {
              seenStocks.add(stockKey);
              await marketService.refreshIfStale(symbol, exchange);
              console.log(
                `[market-monitor] Checked market data for ${stockKey}`
              );
            }

            // Change detection is user-specific, run for each user
            const result = await changeDetectionService.detect(
              user.id,
              symbol,
              exchange
            );

            if (result.meaningful) {
              console.log(
                `[market-monitor] Attention event for ${symbol} (user ${user.id})`,
                "event" in result ? result.event?.type : "duplicate"
              );
            }
          } catch (error) {
            console.error(
              `[market-monitor] Failed for ${item.stock.symbol}:`,
              error instanceof Error ? error.message : error
            );
          }
        }
      }
    }

    console.log("[market-monitor] Background monitor completed.");
  } catch (error) {
    console.error("[market-monitor] Fatal error:", error);
  }
};