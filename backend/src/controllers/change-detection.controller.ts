import { Request, Response } from "express";
import { changeDetectionService } from "../services/change-detection.service";

export const detectChanges = async (
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
        message: "userId, symbol and exchange are required",
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