import prisma from "../lib/prisma";

export const checkpointRepository = {
  async get(
    userId: string,
    stockId: string
  ) {
    return prisma.userStockCheckpoint.findUnique({
      where: {
        userId_stockId: {
          userId,
          stockId,
        },
      },
    });
  },

  async upsert(
    userId: string,
    stockId: string,
    lastSeenPrice: number,
    lastSeenMarketTimestamp: Date
  ) {
    return prisma.userStockCheckpoint.upsert({
      where: {
        userId_stockId: {
          userId,
          stockId,
        },
      },

      create: {
        userId,
        stockId,
        lastSeenPrice,
        lastSeenMarketTimestamp,
      },

      update: {
        lastSeenPrice,
        lastSeenMarketTimestamp,
        lastViewedAt: new Date(),
      },
    });
  },
};
