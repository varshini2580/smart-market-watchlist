import { Router } from "express";
import {
  getDashboard,
  refreshDashboard,
} from "../controllers/dashboard.controller";
import { requireAuth, optionalAuth } from "../middleware/auth.middleware";

const router = Router();

// Primary authenticated endpoints (determines user from session token)
router.get("/", requireAuth, getDashboard);
router.post("/refresh", requireAuth, refreshDashboard);

// Legacy routes with ownership verification
router.get("/:userId", optionalAuth, getDashboard);
router.post("/:userId/refresh", optionalAuth, refreshDashboard);

export default router;