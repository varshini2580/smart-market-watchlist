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
  /**
   * Fetch a live quote directly from Yahoo Finance without requiring
   * the symbol to be seeded in the database first.
   */
  async fetchQuoteDirect(symbol: string, exchange: string) {
    return marketProvider.getQuote(symbol, exchange);
  },

  async fetchAndStoreQuote(
    symbol: string,
    exchange: string
  ) {
    const stock = await stockRepository.findBySymbol(
      symbol,
      exchange
    );

    // If stock not yet in DB, still return live quote data without persisting
    if (!stock) {
      const quote = await marketProvider.getQuote(symbol, exchange);
      return {
        price: quote.price,
        volume: quote.volume,
        marketTimestamp: quote.marketTimestamp,
        source: quote.source,
      };
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

  async getMarketStatus() {
    return marketProvider.getMarketStatus();
  },
};
