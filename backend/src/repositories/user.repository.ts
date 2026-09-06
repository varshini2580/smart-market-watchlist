import prisma from "../lib/prisma";

export const userRepository = {
  async create(name: string, email: string) {
    return prisma.user.create({
      data: {
        name,
        email,
      },
    });
  },

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  },

  async findById(id: string) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  },
};
