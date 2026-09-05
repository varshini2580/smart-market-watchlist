import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import stockRoutes from "./routes/stock.routes";
import watchlistRoutes from "./routes/watchlist.routes";
import marketRoutes from "./routes/market.routes";
import checkpointRoutes from "./routes/checkpoint.routes";
import changeDetectionRoutes from "./routes/change-detection.routes";
import attentionRoutes from "./routes/attention.routes";
import dashboardRoutes from "./routes/dashboard.routes";
import newsRoutes from "./routes/news.routes";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/stocks", stockRoutes);
app.use("/api/watchlists", watchlistRoutes);
app.use("/api/market", marketRoutes);
app.use("/api/checkpoints", checkpointRoutes);
app.use("/api/change-detection", changeDetectionRoutes);
app.use("/api/attention", attentionRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/news", newsRoutes);
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Smart Market Watchlist API is running",
  });
});

app.use("/api/users", userRoutes);

export default app;