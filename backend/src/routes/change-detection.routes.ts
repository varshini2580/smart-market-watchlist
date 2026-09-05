import { Router } from "express";
import { detectChanges } from "../controllers/change-detection.controller";

const router = Router();

router.post(
  "/:userId/:symbol",
  detectChanges
);

export default router;