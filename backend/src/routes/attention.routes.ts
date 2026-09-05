import { Router } from "express";
import { getUserAttention } from "../controllers/attention.controller";

const router = Router();

router.get(
  "/:userId",
  getUserAttention
);

export default router;