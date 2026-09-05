import { stockRepository } from "../repositories/stock.repository";
import { marketRepository } from "../repositories/market.repository";
import {
  RealMarketDataProvider,
} from "../providers/real-market-data.provider";
import {
  HistoricalRange,
} from "../providers/market-data.provider";

const marketProvider = new RealMarketDataProvider();

export const marketService = {
  async fetchAndStoreQuote(
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

    const quote = await marketProvider.getQuote(
      symbol,
      exchange
    );

    return marketRepository.createSnapshot(
      stock.id,
      quote.price,
      quote.volume,
      quote.marketTimestamp,
      quote.source
    );
  },

  /**
   * Fetches a new quote only when the stored data is stale.
   * If fresh, returns the cached snapshot without an external call.
   */
  async refreshIfStale(
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

    const fresh =
      await marketRepository.isSnapshotFresh(
        stock.id
      );

    if (fresh) {
      return marketRepository.getLatestSnapshot(
        stock.id
      );
    }

    const quote = await marketProvider.getQuote(
      symbol,
      exchange
    );

    return marketRepository.createSnapshot(
      stock.id,
      quote.price,
      quote.volume,
      quote.marketTimestamp,
      quote.source
    );
  },

  async getLatestQuote(
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

    return marketRepository.getLatestSnapshot(
      stock.id
    );
  },

  /**
   * Fetch historical price data directly
   * from the configured market-data provider.
   */
  async getHistoricalPrices(
    symbol: string,
    exchange: string,
    range: HistoricalRange
  ) {
    return marketProvider.getHistoricalPrices(
      symbol,
      exchange,
      range
    );
  },

  /**
   * Get the current market status.
   */
  async getMarketStatus() {
    return marketProvider.getMarketStatus();
  },
};