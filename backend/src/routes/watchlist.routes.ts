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

// Primary authenticated endpoints
router.get("/", requireAuth, getUserWatchlists);
router.post("/", requireAuth, createWatchlist);

// Legacy user param route with ownership verification
router.get("/user/:userId", optionalAuth, getUserWatchlists);

router.post("/:watchlistId/stocks", optionalAuth, addStock);

// Secure remove by item ID (ownership validated server-side)
router.delete("/items/:itemId", optionalAuth, removeStockByItemId);

// Legacy: remove by watchlistId + stockId
router.delete("/:watchlistId/stocks/:stockId", optionalAuth, removeStock);

export default router;