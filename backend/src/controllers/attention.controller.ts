import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { attentionService } from "../services/attention.service";

export const getUserAttention = async (
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
          message: "Forbidden: You cannot view another user's attention events",
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

    const limitParam = req.query.limit as string | undefined;
    const limit = limitParam ? Number(limitParam) : 20;

    if (!Number.isInteger(limit) || limit <= 0 || limit > 100) {
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
