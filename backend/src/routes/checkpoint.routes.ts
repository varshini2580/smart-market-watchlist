import { Router } from "express";
import {
  getCheckpoint,
  updateCheckpoint,
} from "../controllers/checkpoint.controller";
import { requireAuth, optionalAuth } from "../middleware/auth.middleware";

const router = Router();

router.get("/:symbol", requireAuth, getCheckpoint);
router.post("/:symbol", requireAuth, updateCheckpoint);

router.get("/:userId/:symbol", optionalAuth, getCheckpoint);
router.post("/:userId/:symbol", optionalAuth, updateCheckpoint);

export default router;
