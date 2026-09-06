import { Request, Response } from "express";
import { stockService } from "../services/stock.service";

export const createStock = async (req: Request, res: Response) => {
  try {
    const { symbol, name, exchange } = req.body;

    if (!symbol || !name || !exchange) {
      return res.status(400).json({
        success: false,
        message: "Symbol, name and exchange are required",
      });
    }

    const stock = await stockService.createStock(
      symbol,
      name,
      exchange
    );

    return res.status(201).json({
      success: true,
      stock,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to create stock",
    });
  }
};

export const getStock = async (req: Request, res: Response) => {
  try {
    const symbol = req.params.symbol as string;
    const exchange = req.query.exchange as string;

    if (!symbol || !exchange) {
      return res.status(400).json({
        success: false,
        message: "Symbol and exchange are required",
      });
    }

    const stock = await stockService.getStock(symbol, exchange);

    if (!stock) {
      return res.status(404).json({
        success: false,
        message: "Stock not found",
      });
    }

    return res.status(200).json({
      success: true,
      stock,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch stock",
    });
  }
};

export const getStocks = async (req: Request, res: Response) => {
  try {
    const search = req.query.search as string | undefined;
    const page = req.query.page ? Number(req.query.page) : undefined;
    const limit = req.query.limit ? Number(req.query.limit) : undefined;

    const result = await stockService.getStocks(search, page, limit);

    return res.status(200).json({
      success: true,
      stocks: result.stocks,
      total: result.total,
      page: result.page,
      limit: result.limit,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch stocks",
    });
  }
};
