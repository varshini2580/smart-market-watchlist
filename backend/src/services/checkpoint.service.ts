import { stockRepository } from "../repositories/stock.repository";
import { marketRepository } from "../repositories/market.repository";
import { checkpointRepository } from "../repositories/checkpoint.repository";

export const checkpointService = {
  async getCheckpoint(
    userId: string,
    symbol: string,
    exchange: string
  ) {
    const stock = await stockRepository.findBySymbol(
      symbol,
      exchange
    );

    if (!stock) {
      throw new Error("Stock not found");
    }

    return checkpointRepository.get(
      userId,
      stock.id
    );
  },

  async updateCheckpoint(
    userId: string,
    symbol: string,
    exchange: string
  ) {
    const stock = await stockRepository.findBySymbol(
      symbol,
      exchange
    );

    if (!stock) {
      throw new Error("Stock not found");
    }

    const latestSnapshot =
      await marketRepository.getLatestSnapshot(
        stock.id
      );

    if (!latestSnapshot) {
      throw new Error(
        "No market data available for this stock"
      );
    }

    return checkpointRepository.upsert(
      userId,
      stock.id,
      Number(latestSnapshot.price),
      latestSnapshot.marketTimestamp
    );
  },
};