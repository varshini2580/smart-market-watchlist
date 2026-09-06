import { Request, Response } from "express";
import { marketService } from "../services/market.service";
import { HistoricalRange } from "../providers/market-data.provider";

const validRanges: HistoricalRange[] = [
  "1d",
  "1w",
  "1m",
  "3m",
  "6m",
  "1y",
];

export const fetchQuote = async (
  req: Request,
  res: Response
) => {
  try {
    const symbol = req.params.symbol as string;
    const exchange = req.query.exchange as string;

    if (!symbol || !exchange) {
      return res.status(400).json({
        success: false,
        message: "Symbol and exchange are required",
      });
    }

    const snapshot =
      await marketService.fetchAndStoreQuote(
        symbol,
        exchange
      );

    return res.status(201).json({
      success: true,
      snapshot,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to fetch market data",
    });
  }
};

export const getLatestQuote = async (
  req: Request,
  res: Response
) => {
  try {
    const symbol = req.params.symbol as string;
    const exchange = req.query.exchange as string;

    if (!symbol || !exchange) {
      return res.status(400).json({
        success: false,
        message: "Symbol and exchange are required",
      });
    }

    const snapshot =
      await marketService.getLatestQuote(
        symbol,
        exchange
      );

    if (!snapshot) {
      return res.status(404).json({
        success: false,
        message: "No market data available",
      });
    }

    return res.status(200).json({
      success: true,
      snapshot,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch latest market data",
    });
  }
};

export const getHistoricalPrices = async (
  req: Request,
  res: Response
) => {
  try {
    const symbol = req.params.symbol as string;
    const exchange = req.query.exchange as string;
    const range = req.query.range as HistoricalRange;

    if (!symbol || !exchange || !range) {
      return res.status(400).json({
        success: false,
        message:
          "Symbol, exchange and range are required",
      });
    }

    if (!validRanges.includes(range)) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid range. Use 1d, 1w, 1m, 3m, 6m or 1y",
      });
    }

    const prices =
      await marketService.getHistoricalPrices(
        symbol,
        exchange,
        range
      );

    return res.status(200).json({
      success: true,
      symbol: symbol.toUpperCase(),
      exchange: exchange.toUpperCase(),
      range,
      prices,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to fetch historical market data",
    });
  }
};

export const getMarketStatus = async (
  _req: Request,
  res: Response
) => {
  try {
    const status =
      await marketService.getMarketStatus();

    return res.status(200).json({
      success: true,
      status,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch market status",
    });
  }
};
