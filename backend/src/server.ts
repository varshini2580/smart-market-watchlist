import "dotenv/config";
import app from "./app";
import { marketMonitorJob } from "./jobs/market-monitor.job";

const PORT = Number(process.env.PORT) || 5000;

/*
 * Background monitor interval — defaults to 15 minutes.
 * This is a background safety net only; the primary refresh
 * strategy is on-demand via POST /api/dashboard/:userId/refresh.
 *
 * Individual stock data is only fetched when stale (see MARKET_FRESHNESS_WINDOW_MINUTES).
 */
const MONITOR_INTERVAL_MINUTES =
  Number(process.env.MONITOR_INTERVAL_MINUTES) || 15;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);

  // Run once at startup to populate initial data
  marketMonitorJob();

  // Background safety-net at a much lower frequency than before
  setInterval(() => {
    marketMonitorJob();
  }, MONITOR_INTERVAL_MINUTES * 60 * 1000);
});