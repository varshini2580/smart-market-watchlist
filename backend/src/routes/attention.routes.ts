import { Router } from "express";
import { getUserAttention } from "../controllers/attention.controller";
import { requireAuth, optionalAuth } from "../middleware/auth.middleware";

const router = Router();

// Primary authenticated route
router.get("/", requireAuth, getUserAttention);

// Legacy route with ownership verification
router.get("/:userId", optionalAuth, getUserAttention);

export default router;