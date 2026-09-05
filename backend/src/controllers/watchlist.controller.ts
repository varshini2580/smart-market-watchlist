import { Request, Response } from "express";
import { watchlistService } from "../services/watchlist.service";

export const createWatchlist = async (
  req: Request,
  res: Response
) => {
  try {
    const { userId, name } = req.body;

    const watchlist = await watchlistService.createWatchlist(
      userId,
      name
    );

    return res.status(201).json({
      success: true,
      watchlist,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to create watchlist",
    });
  }
};

export const getUserWatchlists = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.params.userId as string;

    const watchlists =
      await watchlistService.getUserWatchlists(userId);

    return res.status(200).json({
      success: true,
      watchlists,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch watchlists",
    });
  }
};

export const addStock = async (
  req: Request,
  res: Response
) => {
  try {
    const watchlistId = req.params.watchlistId as string;

    const {
      stockId,
      intent,
      purchasePrice,
      targetPrice,
    } = req.body;

    const item = await watchlistService.addStock(
      watchlistId,
      stockId,
      intent,
      purchasePrice,
      targetPrice
    );

    return res.status(201).json({
      success: true,
      item,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to add stock",
    });
  }
};

/**
 * Remove a watchlist item by its own ID.
 * Expects: DELETE /api/watchlists/items/:itemId
 * Body: { userId }
 */
export const removeStockByItemId = async (
  req: Request,
  res: Response
) => {
  try {
    const itemId = req.params.itemId as string;
    const userId = req.body.userId as string;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "userId is required",
      });
    }

    await watchlistService.removeStockByItemId(userId, itemId);

    return res.status(200).json({
      success: true,
      message: "Stock removed from watchlist",
    });
  } catch (error) {
    console.error(error);

    const msg =
      error instanceof Error
        ? error.message
        : "Failed to remove stock";

    const status = msg.includes("permission") ? 403 : 404;

    return res.status(status).json({
      success: false,
      message: msg,
    });
  }
};

/** Legacy controller kept for backward compat */
export const removeStock = async (
  req: Request,
  res: Response
) => {
  try {
    const watchlistId = req.params.watchlistId as string;
    const stockId = req.params.stockId as string;

    await watchlistService.removeStock(watchlistId, stockId);

    return res.status(200).json({
      success: true,
      message: "Stock removed from watchlist",
    });
  } catch (error) {
    console.error(error);

    return res.status(404).json({
      success: false,
      message: "Watchlist item not found",
    });
  }
};