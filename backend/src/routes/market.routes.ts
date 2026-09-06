import { Router } from "express";

import {
  fetchQuote,
  getLatestQuote,
  getHistoricalPrices,
  getMarketStatus,
} from "../controllers/market.controller";

const router = Router();

router.get(
  "/status",
  getMarketStatus
);

router.get(
  "/:symbol/history",
  getHistoricalPrices
);

router.post(
  "/:symbol/quote",
  fetchQuote
);

router.get(
  "/:symbol/quote",
  getLatestQuote
);

export default router;
