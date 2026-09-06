import prisma from "../lib/prisma";

export const attentionRepository = {
  async getForUser(userId: string) {
    return prisma.attentionEvent.findMany({
      where: {
        userId,
      },
      include: {
        stock: true,
        snapshot: true,
      },
      orderBy: {
        detectedAt: "desc",
      },
    });
  },

  async getRecentForUser(
    userId: string,
    limit: number = 20
  ) {
    return prisma.attentionEvent.findMany({
      where: {
        userId,
      },
      include: {
        stock: true,
        snapshot: true,
      },
      orderBy: {
        detectedAt: "desc",
      },
      take: limit,
    });
  },
};
