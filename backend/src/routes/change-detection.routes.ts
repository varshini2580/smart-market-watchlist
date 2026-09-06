import { Router } from "express";
import { detectChanges } from "../controllers/change-detection.controller";
import { requireAuth, optionalAuth } from "../middleware/auth.middleware";

const router = Router();

router.post("/:symbol", requireAuth, detectChanges);

router.post("/:userId/:symbol", optionalAuth, detectChanges);

export default router;
