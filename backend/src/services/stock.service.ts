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

  async getStocks() {
    return stockRepository.getAll();
  },
};