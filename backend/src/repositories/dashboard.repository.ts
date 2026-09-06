import prisma from "../lib/prisma";

export const dashboardRepository = {
  async getDashboard(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        watchlists: {
          include: {
            items: {
              include: {
                stock: {
                  include: {
                    snapshots: {
                      orderBy: {
                        marketTimestamp: "desc",
                      },
                      take: 1,
                    },
                  },
                },
              },
              orderBy: {
                addedAt: "desc",
              },
            },
          },
        },

        attentionEvents: {
          include: {
            stock: {
  include: {
    snapshots: {
      orderBy: {
        marketTimestamp: "desc",
      },
      take: 1,
    },
  },
},
            snapshot: true,
          },
          orderBy: {
            detectedAt: "desc",
          },
          take: 20,
        },
      },
    });

    if (!user) {
      return null;
    }

    return user;
  },
};
