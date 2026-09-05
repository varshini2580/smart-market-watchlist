import { Router } from "express";

import {
  fetchQuote,
  getLatestQuote,
  getHistoricalPrices,
  getMarketStatus,
} from "../controllers/market.controller";

const router = Router();

/*
 * Market status
 *
 * Example:
 * GET /api/market/status
 */
router.get(
  "/status",
  getMarketStatus
);

/*
 * Historical prices
 *
 * Example:
 * GET /api/market/RELIANCE/history?exchange=NSE&range=1m
 */
router.get(
  "/:symbol/history",
  getHistoricalPrices
);

/*
 * Fetch a fresh quote from the provider
 * and store a snapshot.
 *
 * Example:
 * POST /api/market/RELIANCE/quote?exchange=NSE
 */
router.post(
  "/:symbol/quote",
  fetchQuote
);

/*
 * Get the latest stored quote.
 *
 * Example:
 * GET /api/market/RELIANCE/quote?exchange=NSE
 */
router.get(
  "/:symbol/quote",
  getLatestQuote
);

export default router;