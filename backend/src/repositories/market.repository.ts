import prisma from "../lib/prisma";

const FRESHNESS_WINDOW_MS =
  (Number(process.env.MARKET_FRESHNESS_WINDOW_MINUTES) || 10) * 60 * 1000;

export const marketRepository = {
  async createSnapshot(
    stockId: string,
    price: number,
    volume: number | undefined,
    marketTimestamp: Date,
    source: string
  ) {
    return prisma.marketSnapshot.create({
      data: {
        stockId,
        price,
        volume,
        marketTimestamp,
        source,
      },
    });
  },

  async getLatestSnapshot(stockId: string) {
    return prisma.marketSnapshot.findFirst({
      where: {
        stockId,
      },
      orderBy: {
        marketTimestamp: "desc",
      },
    });
  },

  /**
   * Returns true when the latest snapshot's fetchedAt
   * is within the configured freshness window.
   */
  async isSnapshotFresh(stockId: string): Promise<boolean> {
    const latest = await prisma.marketSnapshot.findFirst({
      where: { stockId },
      orderBy: { fetchedAt: "desc" },
      select: { fetchedAt: true },
    });

    if (!latest) return false;

    const age = Date.now() - latest.fetchedAt.getTime();
    return age < FRESHNESS_WINDOW_MS;
  },
};