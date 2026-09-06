import { stockRepository } from "../repositories/stock.repository";

export const stockService = {
  async createStock(
    symbol: string,
    name: string,
    exchange: string
  ) {
    const normalizedSymbol = symbol.trim().toUpperCase();
    const normalizedExchange = exchange.trim().toUpperCase();

    const existingStock = await stockRepository.findBySymbol(
      normalizedSymbol,
      normalizedExchange
    );

    if (existingStock) {
      throw new Error("Stock already exists");
    }

    return stockRepository.create(
      normalizedSymbol,
      name.trim(),
      normalizedExchange
    );
  },

  async getStock(symbol: string, exchange: string) {
    return stockRepository.findBySymbol(
      symbol.trim().toUpperCase(),
      exchange.trim().toUpperCase()
    );
  },

  async getStocks(search?: string, page?: number, limit?: number) {
    if (page !== undefined || limit !== undefined || search !== undefined) {
      const take = limit ? Math.min(Math.max(Number(limit), 1), 100) : 20;
      const skip = page ? (Math.max(Number(page), 1) - 1) * take : 0;
      const where = search && search.trim()
        ? {
            OR: [
              { symbol: { contains: search.trim(), mode: "insensitive" as const } },
              { name: { contains: search.trim(), mode: "insensitive" as const } },
            ],
          }
        : undefined;

      const [stocks, total] = await Promise.all([
        stockRepository.findWithPagination(where, skip, take),
        stockRepository.count(where),
      ]);

      return { stocks, total, page: page || 1, limit: take };
    }

    const stocks = await stockRepository.getAll();
    return { stocks, total: stocks.length, page: 1, limit: stocks.length };
  },
};
