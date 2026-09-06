export interface MarketQuote {
  symbol: string;
  price: number;
  volume?: number;

  open?: number;
  previousClose?: number;
  dayHigh?: number;
  dayLow?: number;
  fiftyTwoWeekHigh?: number;
  fiftyTwoWeekLow?: number;

  marketTimestamp: Date;
  source: string;
}

export type PricePoint = {
  timestamp: Date;
  price: number;
  volume?: number;
};

export type MarketStatus = "OPEN" | "CLOSED" | "PRE_OPEN" | "UNKNOWN";

export type HistoricalRange = "1d" | "1w" | "1m" | "3m" | "6m" | "1y";

export interface MarketDataProvider {
  getQuote(symbol: string, exchange: string): Promise<MarketQuote>;
  getHistoricalPrices(
    symbol: string,
    exchange: string,
    range: HistoricalRange
  ): Promise<PricePoint[]>;
  getMarketStatus(): Promise<MarketStatus>;
}
