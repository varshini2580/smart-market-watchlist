import { Router } from "express";
import {
  getDashboard,
  refreshDashboard,
} from "../controllers/dashboard.controller";
import { requireAuth, optionalAuth } from "../middleware/auth.middleware";

const router = Router();

router.get("/", requireAuth, getDashboard);
router.post("/refresh", requireAuth, refreshDashboard);

router.get("/:userId", optionalAuth, getDashboard);
router.post("/:userId/refresh", optionalAuth, refreshDashboard);

export default router;
