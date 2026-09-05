import { Router } from "express";

import {
  createWatchlist,
  getUserWatchlists,
  addStock,
  removeStock,
  removeStockByItemId,
} from "../controllers/watchlist.controller";

const router = Router();

router.post("/", createWatchlist);

router.get("/user/:userId", getUserWatchlists);

router.post("/:watchlistId/stocks", addStock);

// Secure remove by item ID (ownership validated server-side)
router.delete("/items/:itemId", removeStockByItemId);

// Legacy: remove by watchlistId + stockId
router.delete("/:watchlistId/stocks/:stockId", removeStock);

export default router;