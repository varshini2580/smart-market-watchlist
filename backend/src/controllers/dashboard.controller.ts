import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { dashboardService } from "../services/dashboard.service";

export const getDashboard = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    // Prefer authenticated user from session/token
    let userId = req.user?.id;
    const paramUserId = typeof req.params.userId === "string" ? req.params.userId : undefined;

    // Validate ownership if client provided a userId parameter
    if (paramUserId) {
      if (userId && userId !== paramUserId) {
        return res.status(403).json({
          success: false,
          message: "Forbidden: You cannot access another user's dashboard",
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

    const dashboard =
      await dashboardService.getDashboard(userId);

    if (!dashboard) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      dashboard,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to load dashboard",
    });
  }
};

/**
 * On-demand refresh: fetch stale market data, run change detection,
 * return the updated dashboard. Called by the frontend refresh button.
 */
export const refreshDashboard = async (
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
          message: "Forbidden: You cannot refresh another user's dashboard",
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

    const dashboard =
      await dashboardService.refreshAndDetect(userId);

    if (!dashboard) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      dashboard,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Unable to refresh market data right now. Showing latest available data.",
    });
  }
};