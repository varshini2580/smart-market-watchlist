import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { checkpointService } from "../services/checkpoint.service";

export const getCheckpoint = async (
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
          message: "Forbidden: You cannot access another user's checkpoint",
        });
      }
      userId = userId || paramUserId;
    }

    const symbol = req.params.symbol as string;
    const exchange = (req.query.exchange as string) || "NSE";

    if (!userId || !symbol) {
      return res.status(400).json({
        success: false,
        message:
          "Authentication and symbol are required",
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
          message: "Forbidden: You cannot update another user's checkpoint",
        });
      }
      userId = userId || paramUserId;
    }

    const symbol = req.params.symbol as string;
    const exchange = (req.query.exchange as string) || "NSE";

    if (!userId || !symbol) {
      return res.status(400).json({
        success: false,
        message:
          "Authentication and symbol are required",
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