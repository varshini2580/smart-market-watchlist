import { Router } from "express";
import {
  getDashboard,
  refreshDashboard,
} from "../controllers/dashboard.controller";

const router = Router();

router.get("/:userId", getDashboard);

// On-demand smart refresh: only fetches stale data
router.post("/:userId/refresh", refreshDashboard);

export default router;