import { Router } from "express";
import {
  createStock,
  getStock,
  getStocks,
} from "../controllers/stock.controller";

const router = Router();

router.post("/", createStock);
router.get("/", getStocks);
router.get("/:symbol", getStock);

export default router;