import prisma from "../lib/prisma";

export const userService = {
  async createUser(name: string, email: string) {
    return prisma.user.create({
      data: {
        name,
        email,
      },
    });
  },

  async getUser(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  },
};
