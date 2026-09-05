import { Request, Response } from "express";
import { checkpointService } from "../services/checkpoint.service";

export const getCheckpoint = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.params.userId as string;
    const symbol = req.params.symbol as string;
    const exchange = req.query.exchange as string;

    if (!userId || !symbol || !exchange) {
      return res.status(400).json({
        success: false,
        message:
          "userId, symbol and exchange are required",
      });
    }

    const checkpoint =
      await checkpointService.getCheckpoint(
        userId,
        symbol,
        exchange
      );

    return res.json({
      success: true,
      checkpoint,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to get checkpoint",
    });
  }
};

export const updateCheckpoint = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.params.userId as string;
    const symbol = req.params.symbol as string;
    const exchange = req.query.exchange as string;

    if (!userId || !symbol || !exchange) {
      return res.status(400).json({
        success: false,
        message:
          "userId, symbol and exchange are required",
      });
    }

    const checkpoint =
      await checkpointService.updateCheckpoint(
        userId,
        symbol,
        exchange
      );

    return res.json({
      success: true,
      checkpoint,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to update checkpoint",
    });
  }
};