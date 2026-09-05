import { Request, Response } from "express";
import { attentionService } from "../services/attention.service";

export const getUserAttention = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.params.userId as string;

    const limitParam = req.query.limit as string | undefined;

    const limit = limitParam
      ? Number(limitParam)
      : undefined;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "userId is required",
      });
    }

    if (
      limit !== undefined &&
      (!Number.isInteger(limit) ||
        limit <= 0 ||
        limit > 100)
    ) {
      return res.status(400).json({
        success: false,
        message: "limit must be between 1 and 100",
      });
    }

    const events =
      await attentionService.getUserAttention(
        userId,
        limit
      );

    return res.status(200).json({
      success: true,
      count: events.length,
      events,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to fetch attention events",
    });
  }
};