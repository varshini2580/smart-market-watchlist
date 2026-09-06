import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { changeDetectionService } from "../services/change-detection.service";

export const detectChanges = async (
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
          message: "Forbidden: You cannot trigger change detection for another user",
        });
      }
      userId = userId || paramUserId;
    }

    const symbol = req.params.symbol as string;
    const exchange = (req.query.exchange as string) || "NSE";

    if (!userId || !symbol) {
      return res.status(400).json({
        success: false,
        message: "Authentication and symbol are required",
      });
    }

    const result = await changeDetectionService.detect(
      userId,
      symbol,
      exchange
    );

    return res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Change detection failed",
    });
  }
};