import { Router } from "express";
import { getUserAttention } from "../controllers/attention.controller";
import { requireAuth, optionalAuth } from "../middleware/auth.middleware";

const router = Router();

router.get("/", requireAuth, getUserAttention);

router.get("/:userId", optionalAuth, getUserAttention);

export default router;
