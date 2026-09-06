import { Router } from "express";
import {
  getCheckpoint,
  updateCheckpoint,
} from "../controllers/checkpoint.controller";
import { requireAuth, optionalAuth } from "../middleware/auth.middleware";

const router = Router();

// Primary authenticated routes
router.get("/:symbol", requireAuth, getCheckpoint);
router.post("/:symbol", requireAuth, updateCheckpoint);

// Legacy routes with ownership verification
router.get("/:userId/:symbol", optionalAuth, getCheckpoint);
router.post("/:userId/:symbol", optionalAuth, updateCheckpoint);

export default router;