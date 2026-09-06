import "dotenv/config";
import app from "./app";
import { marketMonitorJob } from "./jobs/market-monitor.job";

const PORT = Number(process.env.PORT) || 5000;

const MONITOR_INTERVAL_MINUTES =
  Number(process.env.MONITOR_INTERVAL_MINUTES) || 15;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);

  marketMonitorJob();

  setInterval(() => {
    marketMonitorJob();
  }, MONITOR_INTERVAL_MINUTES * 60 * 1000);
});
