import YahooFinance from "yahoo-finance2";

import {
    MarketDataProvider,
    MarketQuote,
    PricePoint,
    MarketStatus,
    HistoricalRange,
} from "./market-data.provider";

const yahooFinance = new YahooFinance({
    suppressNotices: ["yahooSurvey"],
});

function yahooSymbol(symbol: string, exchange: string): string {
    const normalizedSymbol = symbol.toUpperCase().trim();
    const normalizedExchange = exchange.toUpperCase().trim();

    if (normalizedExchange === "NSE") {
        return `${normalizedSymbol}.NS`;
    }

    if (normalizedExchange === "BSE") {
        return `${normalizedSymbol}.BO`;
    }

    if (normalizedSymbol.includes(".")) {
        return normalizedSymbol;
    }

    return normalizedSymbol;
}

function mapRange(range: HistoricalRange) {
    switch (range) {
        case "1d":
            return {
                period1: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
                interval: "5m" as const,
            };

        case "1w":
            return {
                period1: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
                interval: "1h" as const,
            };

        case "1m":
            return {
                period1: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
                interval: "1d" as const,
            };

        case "3m":
            return {
                period1: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
                interval: "1d" as const,
            };

        case "6m":
            return {
                period1: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000),
                interval: "1d" as const,
            };

        case "1y":
            return {
                period1: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
                interval: "1d" as const,
            };
    }
}

export class RealMarketDataProvider
    implements MarketDataProvider {
    async getQuote(
        symbol: string,
        exchange: string
    ): Promise<MarketQuote> {
        const ticker = yahooSymbol(symbol, exchange);

        const quote = await yahooFinance.quote(ticker);

        if (quote.regularMarketPrice == null) {
            throw new Error(
                `No current market price available for ${ticker}`
            );
        }

        return {
            symbol: symbol.toUpperCase(),
            price: Number(quote.regularMarketPrice),
            volume:
                quote.regularMarketVolume != null
                    ? Number(quote.regularMarketVolume)
                    : undefined,

            open:
                quote.regularMarketOpen != null
                    ? Number(quote.regularMarketOpen)
                    : undefined,

            previousClose:
                quote.regularMarketPreviousClose != null
                    ? Number(quote.regularMarketPreviousClose)
                    : undefined,

            dayHigh:
                quote.regularMarketDayHigh != null
                    ? Number(quote.regularMarketDayHigh)
                    : undefined,

            dayLow:
                quote.regularMarketDayLow != null
                    ? Number(quote.regularMarketDayLow)
                    : undefined,

            fiftyTwoWeekHigh:
                quote.fiftyTwoWeekHigh != null
                    ? Number(quote.fiftyTwoWeekHigh)
                    : undefined,

            fiftyTwoWeekLow:
                quote.fiftyTwoWeekLow != null
                    ? Number(quote.fiftyTwoWeekLow)
                    : undefined,

            marketTimestamp:
                quote.regularMarketTime instanceof Date
                    ? quote.regularMarketTime
                    : new Date(),

            source: "YAHOO_FINANCE",
        };
    }

    async getHistoricalPrices(
        symbol: string,
        exchange: string,
        range: HistoricalRange
    ): Promise<PricePoint[]> {
        const ticker = yahooSymbol(symbol, exchange);
        const config = mapRange(range);

        const result = await yahooFinance.chart(ticker, {
            period1: config.period1,
            period2: new Date(),
            interval: config.interval,
        });

        return result.quotes
            .filter(
                (point) =>
                    point.close != null &&
                    point.date != null
            )
            .map((point) => ({
                timestamp: new Date(point.date),
                price: Number(point.close),
                volume:
                    point.volume != null
                        ? Number(point.volume)
                        : undefined,
            }));
    }

    private marketStatusCache: { status: MarketStatus; timestamp: number } | null = null;

    async getMarketStatus(): Promise<MarketStatus> {
        if (this.marketStatusCache && Date.now() - this.marketStatusCache.timestamp < 120_000) {
            return this.marketStatusCache.status;
        }

        try {
            const quotePromise = yahooFinance.quote("^NSEI");
            const timeoutPromise = new Promise<never>((_, reject) =>
                setTimeout(() => reject(new Error("Market status query timed out")), 2500)
            );

            const quote = (await Promise.race([quotePromise, timeoutPromise])) as any;
            const state = quote?.marketState;

            let status: MarketStatus = "CLOSED";
            switch (state) {
                case "REGULAR":
                    status = "OPEN";
                    break;
                case "PRE":
                case "PREPRE":
                    status = "PRE_OPEN";
                    break;
                case "POST":
                case "POSTPOST":
                case "CLOSED":
                    status = "CLOSED";
                    break;
                default:
                    status = this.getNseScheduleStatus();
            }

            this.marketStatusCache = { status, timestamp: Date.now() };
            return status;
        } catch (error) {
            console.warn(
                "[Yahoo Finance] Failed/timed-out determining market status, using IST schedule fallback:",
                error instanceof Error ? error.message : error
            );

            const status = this.getNseScheduleStatus();
            this.marketStatusCache = { status, timestamp: Date.now() };
            return status;
        }
    }

    private getNseScheduleStatus(): MarketStatus {
        const now = new Date();
        const istTime = new Date(now.getTime() + (330 + now.getTimezoneOffset()) * 60000);
        const day = istTime.getDay(); // 0 = Sun, 6 = Sat
        if (day === 0 || day === 6) return "CLOSED";

        const minutes = istTime.getHours() * 60 + istTime.getMinutes();
        if (minutes >= 540 && minutes < 555) return "PRE_OPEN"; // 09:00 - 09:15
        if (minutes >= 555 && minutes < 930) return "OPEN";     // 09:15 - 15:30
        return "CLOSED";
    }
}
