import prisma from "../lib/prisma";

export const watchlistRepository = {
  async create(userId: string, name: string) {
    return prisma.watchlist.create({
      data: {
        userId,
        name,
      },
    });
  },

  async findByUserId(userId: string) {
    return prisma.watchlist.findMany({
      where: {
        userId,
      },
      include: {
        items: {
          include: {
            stock: true,
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  },

  async findById(id: string) {
    return prisma.watchlist.findUnique({
      where: {
        id,
      },
      include: {
        items: {
          include: {
            stock: true,
          },
        },
      },
    });
  },

  async addStock(
    watchlistId: string,
    stockId: string,
    intent: "HOLDING" | "INTERESTED",
    purchasePrice?: number,
    targetPrice?: number
  ) {
    return prisma.watchlistItem.create({
      data: {
        watchlistId,
        stockId,
        intent,
        purchasePrice,
        targetPrice,
      },
      include: {
        stock: true,
      },
    });
  },

  async findItemById(itemId: string) {
    return prisma.watchlistItem.findUnique({
      where: { id: itemId },
      include: {
        watchlist: true,
        stock: true,
      },
    });
  },

  async removeItemById(itemId: string) {
    return prisma.watchlistItem.delete({
      where: { id: itemId },
    });
  },

  async removeStock(watchlistId: string, stockId: string) {
    return prisma.watchlistItem.delete({
      where: {
        watchlistId_stockId: {
          watchlistId,
          stockId,
        },
      },
    });
  },
};
