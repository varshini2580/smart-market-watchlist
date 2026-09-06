import { Router } from "express";
import { detectChanges } from "../controllers/change-detection.controller";
import { requireAuth, optionalAuth } from "../middleware/auth.middleware";

const router = Router();

// Primary authenticated route
router.post("/:symbol", requireAuth, detectChanges);

// Legacy route with ownership verification
router.post("/:userId/:symbol", optionalAuth, detectChanges);

export default router;