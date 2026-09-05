import { Router } from "express";

import {
  getCheckpoint,
  updateCheckpoint,
} from "../controllers/checkpoint.controller";

const router = Router();

router.get(
  "/:userId/:symbol",
  getCheckpoint
);

router.post(
  "/:userId/:symbol",
  updateCheckpoint
);

export default router;