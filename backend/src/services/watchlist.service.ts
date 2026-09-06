import { watchlistRepository } from "../repositories/watchlist.repository";
import { checkpointRepository } from "../repositories/checkpoint.repository";
import { marketRepository } from "../repositories/market.repository";

export const watchlistService = {
  async createWatchlist(userId: string, name: string) {
    if (!userId || !name?.trim()) {
      throw new Error("User ID and watchlist name are required");
    }

    return watchlistRepository.create(userId, name.trim());
  },

  async getUserWatchlists(userId: string) {
    return watchlistRepository.findByUserId(userId);
  },

  async addStock(
    watchlistId: string,
    stockId: string,
    intent: "HOLDING" | "INTERESTED",
    purchasePrice?: number,
    targetPrice?: number
  ) {
    if (!watchlistId || !stockId) {
      throw new Error("Watchlist ID and stock ID are required");
    }

    if (!["HOLDING", "INTERESTED"].includes(intent)) {
      throw new Error("Invalid watch intent");
    }

    if (purchasePrice !== undefined && purchasePrice < 0) {
      throw new Error("Purchase price cannot be negative");
    }

    if (targetPrice !== undefined && targetPrice < 0) {
      throw new Error("Target price cannot be negative");
    }

    const watchlistItem = await watchlistRepository.addStock(
      watchlistId,
      stockId,
      intent,
      purchasePrice,
      targetPrice
    );

    const latestSnapshot =
      await marketRepository.getLatestSnapshot(stockId);

    if (latestSnapshot) {
      const watchlist =
        await watchlistRepository.findById(watchlistId);

      if (watchlist) {
        await checkpointRepository.upsert(
          watchlist.userId,
          stockId,
          Number(latestSnapshot.price),
          latestSnapshot.marketTimestamp
        );
      }
    }

    return watchlistItem;
  },

  async removeStockByItemId(userId: string, itemId: string) {
    if (!userId || !itemId) {
      throw new Error("User ID and item ID are required");
    }

    const item = await watchlistRepository.findItemById(itemId);

    if (!item) {
      throw new Error("Watchlist item not found");
    }

    if (item.watchlist.userId !== userId) {
      throw new Error(
        "You do not have permission to remove this item"
      );
    }

    return watchlistRepository.removeItemById(itemId);
  },

  async removeStock(watchlistId: string, stockId: string) {
    return watchlistRepository.removeStock(watchlistId, stockId);
  },
};
