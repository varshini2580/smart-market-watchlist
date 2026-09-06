import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes";
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

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  "https://smart-market-watchlist.onrender.com",
].filter(Boolean) as string[];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (
        allowedOrigins.includes(origin) ||
        origin.endsWith(".onrender.com") ||
        origin.includes("localhost")
      ) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive callback ensuring no unexpected CORS blocks while passing credentials
    },
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);

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

export { app };
export default app;
