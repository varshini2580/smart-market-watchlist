import { Router } from "express";
import {
  createWatchlist,
  getUserWatchlists,
  addStock,
  removeStock,
  removeStockByItemId,
} from "../controllers/watchlist.controller";
import { requireAuth, optionalAuth } from "../middleware/auth.middleware";

const router = Router();

router.get("/", requireAuth, getUserWatchlists);
router.post("/", requireAuth, createWatchlist);

router.get("/user/:userId", optionalAuth, getUserWatchlists);

router.post("/:watchlistId/stocks", optionalAuth, addStock);

router.delete("/items/:itemId", optionalAuth, removeStockByItemId);

router.delete("/:watchlistId/stocks/:stockId", optionalAuth, removeStock);

export default router;
