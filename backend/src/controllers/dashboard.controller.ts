import { Request, Response } from "express";
import { dashboardService } from "../services/dashboard.service";

export const getDashboard = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.params.userId as string;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "userId is required",
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
  req: Request,
  res: Response
) => {
  try {
    const userId = req.params.userId as string;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "userId is required",
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