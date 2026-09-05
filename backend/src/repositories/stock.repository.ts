import prisma from "../lib/prisma";

export const stockRepository = {
  async create(symbol: string, name: string, exchange: string) {
    return prisma.stock.create({
      data: {
        symbol: symbol.toUpperCase(),
        name,
        exchange: exchange.toUpperCase(),
      },
    });
  },

  async findBySymbol(symbol: string, exchange: string) {
    return prisma.stock.findUnique({
      where: {
        symbol_exchange: {
          symbol: symbol.toUpperCase(),
          exchange: exchange.toUpperCase(),
        },
      },
    });
  },

  async findById(id: string) {
    return prisma.stock.findUnique({
      where: { id },
    });
  },

  async getAll() {
    return prisma.stock.findMany({
      orderBy: {
        symbol: "asc",
      },
    });
  },
};