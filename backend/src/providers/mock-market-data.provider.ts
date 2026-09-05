import {
  MarketDataProvider,
  MarketQuote,
  PricePoint,
  HistoricalRange,
  MarketStatus,
} from "./market-data.provider";

export class MockMarketDataProvider
  implements MarketDataProvider {
  private prices: Record<string, number[]> = {
    "RELIANCE:NSE": [1000, 1020, 1080, 1075, 1100],
    "TCS:NSE": [3500, 3480, 3600, 3650, 3550],
    "INFY:NSE": [1500, 1525, 1490, 1550, 1600],
    "HDFCBANK:NSE": [1600, 1630, 1680, 2000, 2050],
  };

  private callCount: Record<string, number> = {};

  async getQuote(
    symbol: string,
    exchange: string
  ): Promise<MarketQuote> {
    const key =
      `${symbol.toUpperCase()}:${exchange.toUpperCase()}`;

    const priceHistory = this.prices[key];

    if (!priceHistory) {
      throw new Error(
        `No mock price available for ${key}`
      );
    }

    const currentIndex =
      this.callCount[key] ?? 0;

    const price =
      priceHistory[
      currentIndex % priceHistory.length
      ];

    this.callCount[key] = currentIndex + 1;

    const volumes: Record<string, number[]> = {
      "RELIANCE:NSE": [
        100000,
        100000,
        100000,
        100000,
        100000,
      ],

      "TCS:NSE": [
        100000,
        100000,
        100000,
        100000,
        100000,
      ],

      "INFY:NSE": [
        100000,
        100000,
        100000,
        100000,
        100000,
      ],

      "HDFCBANK:NSE": [
        100000,
        100000,
        250000,
        100000,
        350000,
      ],
    };

    const volumeHistory =
      volumes[key] ?? [100000];

    const volume =
      volumeHistory[
      currentIndex % volumeHistory.length
      ];

    return {
      symbol: symbol.toUpperCase(),
      price,
      volume,
      marketTimestamp: new Date(),
      source: "MOCK",
    };
  }

  async getHistoricalPrices(
    symbol: string,
    exchange: string,
    _range: HistoricalRange
  ): Promise<PricePoint[]> {
    const key =
      `${symbol.toUpperCase()}:${exchange.toUpperCase()}`;

    const prices = this.prices[key];

    if (!prices) {
      throw new Error(
        `No mock historical data available for ${key}`
      );
    }

    const now = Date.now();

    return prices.map((price, index) => ({
      timestamp: new Date(
        now -
        (prices.length - index) *
        24 *
        60 *
        60 *
        1000
      ),
      price,
      volume: 100000,
    }));
  }

  async getMarketStatus(): Promise<MarketStatus> {
    return "OPEN";
  }
}