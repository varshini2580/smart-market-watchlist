import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { watchlistService } from "../services/watchlist.service";
import { watchlistRepository } from "../repositories/watchlist.repository";

export const createWatchlist = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const userId = req.user?.id || req.body.userId;
    const { name } = req.body;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

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
  req: AuthRequest,
  res: Response
) => {
  try {
    let userId = req.user?.id;
    const paramUserId = typeof req.params.userId === "string" ? req.params.userId : undefined;

    if (paramUserId) {
      if (userId && userId !== paramUserId) {
        return res.status(403).json({
          success: false,
          message: "Forbidden: You cannot access another user's watchlists",
        });
      }
      userId = userId || paramUserId;
    }

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

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
  req: AuthRequest,
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

    if (req.user) {
      const watchlist = await watchlistRepository.findById(watchlistId);
      if (!watchlist) {
        return res.status(404).json({
          success: false,
          message: "Watchlist not found",
        });
      }
      if (watchlist.userId !== req.user.id) {
        return res.status(403).json({
          success: false,
          message: "Forbidden: You cannot modify another user's watchlist",
        });
      }
    }

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

export const removeStockByItemId = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const itemId = req.params.itemId as string;
    const userId = req.user?.id || (req.body.userId as string);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
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

export const removeStock = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const watchlistId = req.params.watchlistId as string;
    const stockId = req.params.stockId as string;

    if (req.user) {
      const watchlist = await watchlistRepository.findById(watchlistId);
      if (watchlist && watchlist.userId !== req.user.id) {
        return res.status(403).json({
          success: false,
          message: "Forbidden: You cannot modify another user's watchlist",
        });
      }
    }

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
