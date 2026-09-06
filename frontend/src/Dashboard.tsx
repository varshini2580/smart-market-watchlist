import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";


import { API_BASE as API_URL } from "./config";

// ── Types ────────────────────────────────────────────────────────────
type Stock = {
  watchlistItemId: string;
  watchlistId: string;
  watchlistName: string;
  stockId: string;
  symbol: string;
  name: string;
  exchange: string;
  intent: "HOLDING" | "INTERESTED";
  purchasePrice: string | null;
  targetPrice: string | null;
  currentPrice: string | null;
  marketTimestamp: string | null;
  fetchedAt: string | null;
  addedAt: string;
};

type AvailableStock = {
  id: string;
  symbol: string;
  name: string;
  exchange: string;
};

type AttentionEvent = {
  id: string;
  symbol: string;
  name: string;
  exchange: string;
  type:
  | "LARGE_PRICE_CHANGE"
  | "TARGET_REACHED"
  | "PURCHASE_PRICE_CROSSED"
  | "VOLUME_SPIKE";
  severity: "LOW" | "MEDIUM" | "HIGH";
  previousPrice: string | null;
  currentPrice: string | null;
  changePercent: string | null;
  marketTimestamp: string;
  detectedAt: string;
};

type Dashboard = {
  user: { id: string; name: string; email: string };
  stocks: Stock[];
  attention: AttentionEvent[];
  summary: {
    totalStocks: number;
    highPriority: number;
    attentionCount: number;
  };
};

type Toast = {
  id: string;
  type: "success" | "error";
  message: string;
};

// ── Helpers ──────────────────────────────────────────────────────────

function fmt(price: string | number | null) {
  if (price === null || price === undefined) return "—";
  return `₹${Number(price).toLocaleString("en-IN")}`;
}

function fmtTime(dateStr: string | null) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function timeAgo(dateStr: string | null): string {
  if (!dateStr) return "";
  const diff = Math.floor(
    (Date.now() - new Date(dateStr).getTime()) / 1000
  );
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`;
  return new Date(dateStr).toLocaleDateString("en-IN");
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function isMarketHours(): boolean {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 6=Sat
  if (day === 0 || day === 6) return false;
  const hour = now.getHours();
  const min = now.getMinutes();
  const mins = hour * 60 + min;
  // NSE: 9:15 AM – 3:30 PM IST
  return mins >= 555 && mins <= 930;
}

/**
 * Human-readable attention description.
 */
function attentionDescription(event: AttentionEvent): string {
  const pct = event.changePercent
    ? `${Math.abs(Number(event.changePercent)).toFixed(2)}%`
    : null;

  switch (event.type) {
    case "TARGET_REACHED":
      return `Your target price of ${fmt(event.currentPrice)} was reached.`;
    case "PURCHASE_PRICE_CROSSED":
      return `Price dropped below your purchase price.`;
    case "LARGE_PRICE_CHANGE":
      return pct
        ? `${event.symbol} moved ${pct}, which is above the significant-change threshold.`
        : `${event.symbol} made a significant price move.`;
    case "VOLUME_SPIKE": {
      const cp = event.changePercent ? Number(event.changePercent) : null;
      if (cp !== null) {
        return `Trading volume surged to ${Math.abs(cp).toFixed(1)}× the previous baseline.`;
      }
      return "Trading volume spiked significantly above the previous baseline.";
    }
    default:
      return "A meaningful market event was detected.";
  }
}

function attentionIcon(type: AttentionEvent["type"]): string {
  switch (type) {
    case "TARGET_REACHED":
      return "🎯";
    case "PURCHASE_PRICE_CROSSED":
      return "⚠️";
    case "LARGE_PRICE_CHANGE":
      return "📈";
    case "VOLUME_SPIKE":
      return "🔊";
    default:
      return "!";
  }
}

function attentionTypeLabel(type: AttentionEvent["type"]): string {
  switch (type) {
    case "TARGET_REACHED":
      return "Target Reached";
    case "PURCHASE_PRICE_CROSSED":
      return "Purchase Price Crossed";
    case "LARGE_PRICE_CHANGE":
      return "Large Price Change";
    case "VOLUME_SPIKE":
      return "Volume Spike";
    default:
      return type;
  }
}

// ── Component ─────────────────────────────────────────────────────────

function Dashboard() {
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [availableStocks, setAvailableStocks] = useState<AvailableStock[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState<Date | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Add stock modal
  const [showAddStock, setShowAddStock] = useState(false);
  const [selectedStock, setSelectedStock] = useState<AvailableStock | null>(null);
  const [search, setSearch] = useState("");
  const [intent, setIntent] = useState<"HOLDING" | "INTERESTED">("HOLDING");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [targetPrice, setTargetPrice] = useState("");
  const [adding, setAdding] = useState(false);
  const [addError, setAddError] = useState("");

  // Remove confirmation modal
  const [removeTarget, setRemoveTarget] = useState<Stock | null>(null);
  const [removing, setRemoving] = useState(false);

  const lastRefreshAttempt = useRef<number>(0);

  // ── Toast helpers ─────────────────────────────────────────────────
  const addToast = useCallback(
    (type: "success" | "error", message: string) => {
      const id = Date.now().toString();
      setToasts((prev) => [...prev, { id, type, message }]);
      setTimeout(
        () => setToasts((prev) => prev.filter((t) => t.id !== id)),
        3500
      );
    },
    []
  );

  // ── Data fetching ─────────────────────────────────────────────────
  const fetchDashboard = useCallback(async (retryCount = 0) => {
    try {
      const res = await axios.get(
        `${API_URL}/api/dashboard`,
        { timeout: 8000 }
      );
      const dash = res.data.dashboard;
      if (dash && Array.isArray(dash.attention)) {
        const seen = new Set<string>();
        dash.attention = dash.attention.filter((a: any) => {
          if (!a.id || seen.has(a.id)) return false;
          seen.add(a.id);
          return true;
        });
      }
      setDashboard(dash);
      setError("");
    } catch (err) {
      if (retryCount < 1) {
        setTimeout(() => fetchDashboard(retryCount + 1), 600);
        return;
      }
      console.error("fetchDashboard error:", err);
      setError(
        "Unable to load dashboard. Please check your connection."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchStocks = useCallback(async () => {
    try {
      const res = await axios.get(`${API_URL}/api/stocks`, { timeout: 8000 });
      setAvailableStocks(res.data.stocks || []);
    } catch {
      // Non-critical — modal will show empty search
    }
  }, []);

  /**
   * On-demand refresh: only fetches stale market data,
   * runs change detection, updates dashboard.
   */
  const handleRefresh = useCallback(async () => {
    if (refreshing) return;

    // Debounce: don't refresh within 15s of last attempt
    const now = Date.now();
    if (now - lastRefreshAttempt.current < 15_000) return;
    lastRefreshAttempt.current = now;

    setRefreshing(true);
    try {
      const res = await axios.post(
        `${API_URL}/api/dashboard/refresh`,
        {},
        { timeout: 10000 }
      );
      const dash = res.data.dashboard;
      if (dash && Array.isArray(dash.attention)) {
        const seen = new Set<string>();
        dash.attention = dash.attention.filter((a: any) => {
          if (!a.id || seen.has(a.id)) return false;
          seen.add(a.id);
          return true;
        });
      }
      setDashboard(dash);
      setLastRefreshed(new Date());
      setError("");
    } catch {
      addToast(
        "error",
        "Unable to refresh prices right now. Showing latest available data."
      );
    } finally {
      setRefreshing(false);
    }
  }, [refreshing, addToast]);

  // Initial load + tab visibility refresh
  useEffect(() => {
    fetchDashboard();
    fetchStocks();

    // Trigger a refresh after the initial load completes
    const timer = setTimeout(() => {
      handleRefresh();
    }, 800);

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        handleRefresh();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Add stock ─────────────────────────────────────────────────────
  const openAddStock = () => {
    setShowAddStock(true);
    setSelectedStock(null);
    setSearch("");
    setIntent("HOLDING");
    setPurchasePrice("");
    setTargetPrice("");
    setAddError("");
  };

  const closeAddStock = () => {
    if (adding) return;
    setShowAddStock(false);
    setSelectedStock(null);
    setAddError("");
  };

  const handleAddStock = async () => {
    if (!selectedStock) {
      setAddError("Please select a stock.");
      return;
    }
    if (intent === "HOLDING" && !purchasePrice) {
      setAddError("Please enter your purchase price.");
      return;
    }
    if (purchasePrice && Number(purchasePrice) < 0) {
      setAddError("Purchase price must be a positive number.");
      return;
    }
    if (targetPrice && Number(targetPrice) < 0) {
      setAddError("Target price must be a positive number.");
      return;
    }

    try {
      setAdding(true);
      setAddError("");

      const wRes = await axios.get(
        `${API_URL}/api/watchlists`
      );
      const watchlists = wRes.data.watchlists || [];

      if (watchlists.length === 0) {
        setAddError("No watchlist found for this user.");
        return;
      }

      const watchlistId = watchlists[0].id;

      await axios.post(
        `${API_URL}/api/watchlists/${watchlistId}/stocks`,
        {
          stockId: selectedStock.id,
          intent,
          ...(purchasePrice ? { purchasePrice: Number(purchasePrice) } : {}),
          ...(targetPrice ? { targetPrice: Number(targetPrice) } : {}),
        }
      );

      setShowAddStock(false);
      setSelectedStock(null);
      await fetchDashboard();
      addToast("success", `${selectedStock.symbol} added to your watchlist.`);
    } catch (err: unknown) {
      const msg =
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message ?? "Unable to add stock to watchlist.";

      if (msg.includes("Unique constraint") || msg.includes("already")) {
        setAddError("This stock is already in your watchlist.");
      } else {
        setAddError(msg);
      }
    } finally {
      setAdding(false);
    }
  };

  // ── Remove stock ──────────────────────────────────────────────────
  const handleRemoveConfirm = async () => {
    if (!removeTarget) return;
    setRemoving(true);
    try {
      await axios.delete(
        `${API_URL}/api/watchlists/items/${removeTarget.watchlistItemId}`
      );

      setDashboard((prev) => {
        if (!prev) return prev;
        const stocks = prev.stocks.filter(
          (s) => s.watchlistItemId !== removeTarget.watchlistItemId
        );
        const totalStocks = stocks.length;
        return {
          ...prev,
          stocks,
          summary: { ...prev.summary, totalStocks },
        };
      });

      addToast("success", `${removeTarget.symbol} removed from watchlist.`);
      setRemoveTarget(null);
    } catch {
      addToast("error", "Failed to remove stock. Please try again.");
    } finally {
      setRemoving(false);
    }
  };

  const filteredStocks = availableStocks.filter((s) => {
    const q = search.toLowerCase();
    return (
      s.symbol.toLowerCase().includes(q) ||
      s.name.toLowerCase().includes(q)
    );
  });

  // ── Stock card price delta ────────────────────────────────────────
  function getPriceDelta(stock: Stock) {
    if (!stock.currentPrice) return null;
    const cur = Number(stock.currentPrice);

    // Compare to purchase price if HOLDING, else no delta
    if (stock.purchasePrice) {
      const pur = Number(stock.purchasePrice);
      const delta = cur - pur;
      const pct = ((delta / pur) * 100).toFixed(2);
      return { delta, pct: Number(pct), label: "vs purchase" };
    }
    return null;
  }

  function getStockTrend(
    stock: Stock
  ): "rising" | "falling" | "stable" {
    const delta = getPriceDelta(stock);
    if (!delta) return "stable";
    if (delta.delta > 0) return "rising";
    if (delta.delta < 0) return "falling";
    return "stable";
  }

  // ── Rendering ─────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="page">
        <div className="page-topbar">
          <div className="page-topbar-left">
            <p className="eyebrow">PORTFOLIO INTELLIGENCE</p>
            <h1 className="page-title">Executive Dashboard</h1>
          </div>
        </div>
        <div className="page-body">
          <div className="skeleton skeleton-hero" />
          <div className="skeleton-grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="skeleton skeleton-card" />
            ))}
          </div>
          <div className="skeleton-section">
            {[1, 2].map((i) => (
              <div key={i} className="skeleton skeleton-stock" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error && !dashboard) {
    return (
      <div className="error-screen">
        <div className="error-icon">⚡</div>
        <h2>Connection Error</h2>
        <p>{error}</p>
        <button className="btn-primary" onClick={() => fetchDashboard(0)}>
          Try Again
        </button>
      </div>
    );
  }

  if (!dashboard) return null;

  return (
    <div className="page">
      {/* ── Toast Notifications ── */}
      <div className="toast-container" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={`toast toast-${t.type}`}>
            <span className="toast-icon">
              {t.type === "success" ? "✓" : "✕"}
            </span>
            {t.message}
          </div>
        ))}
      </div>

      {/* ── Topbar ── */}
      <div className="page-topbar">
        <div className="page-topbar-left">
          <p className="eyebrow">PORTFOLIO INTELLIGENCE</p>
          <h1 className="page-title">Executive Dashboard</h1>
          <p className="page-subtitle">Real-time overview of your tracked assets, market movers, and smart alerts</p>
        </div>
        <div className="page-topbar-right">
          <button
            className={`refresh-btn ${refreshing ? "refreshing" : ""}`}
            onClick={handleRefresh}
            disabled={refreshing}
            aria-label="Refresh market prices"
            title="Refresh market prices"
          >
            <span className="refresh-icon">↻</span>
            {refreshing ? "Refreshing…" : "Refresh Prices"}
          </button>

          <div className="user">
            <div
              className="avatar"
              aria-label={`Avatar for ${dashboard.user.name}`}
            >
              {dashboard.user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <strong>{dashboard.user.name}</strong>
              <span>{dashboard.user.email}</span>
            </div>
          </div>
        </div>
      </div>

      <main className="page-body">
        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">MARKET OVERVIEW</p>
            <h2>
              {getGreeting()}, {dashboard.user.name.split(" ")[0]} 👋
            </h2>
            <p className="hero-sub">
              {dashboard.summary.attentionCount > 0
                ? `${dashboard.summary.attentionCount} thing${dashboard.summary.attentionCount !== 1 ? "s" : ""} deserve${dashboard.summary.attentionCount === 1 ? "s" : ""} your attention right now.`
                : "Your watchlist is quiet right now. Nothing needs your attention."}
            </p>
            {lastRefreshed && (
              <p className="hero-updated">
                <span className="dot-live" />
                Updated {timeAgo(lastRefreshed.toISOString())}
                {!isMarketHours() && " · Market closed"}
              </p>
            )}
          </div>

          {/* Market status indicator */}
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-val">
                {dashboard.summary.totalStocks}
              </span>
              <span className="hero-stat-label">Stocks</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span
                className={`hero-stat-val ${dashboard.summary.attentionCount > 0 ? "text-warning" : "text-success"}`}
              >
                {dashboard.summary.attentionCount}
              </span>
              <span className="hero-stat-label">Attention</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span
                className={`hero-stat-val ${dashboard.summary.highPriority > 0 ? "text-danger" : ""}`}
              >
                {dashboard.summary.highPriority}
              </span>
              <span className="hero-stat-label">High Priority</span>
            </div>
          </div>
        </section>

        {/* ── Summary Cards ── */}
        <section className="summary-grid" aria-label="Summary">
          <div className="summary-card">
            <span className="summary-icon">📊</span>
            <span className="summary-label">Total Stocks</span>
            <strong className="summary-value">
              {dashboard.summary.totalStocks}
            </strong>
          </div>

          <div className="summary-card attention-card">
            <span className="summary-icon">🔔</span>
            <span className="summary-label">Attention Required</span>
            <strong className="summary-value">
              {dashboard.summary.attentionCount}
            </strong>
          </div>

          <div className="summary-card danger-card">
            <span className="summary-icon">⚡</span>
            <span className="summary-label">High Priority</span>
            <strong className="summary-value">
              {dashboard.summary.highPriority}
            </strong>
          </div>
        </section>

        {/* ── Watchlist ── */}
        <section className="section" aria-label="My Stocks">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WATCHLIST</p>
              <h2>My Stocks</h2>
            </div>

            <div className="watchlist-actions">
              <span className="count">
                {dashboard.stocks.length} stock
                {dashboard.stocks.length !== 1 ? "s" : ""}
              </span>
              <button
                className="btn-primary"
                onClick={openAddStock}
                aria-label="Add a stock to watchlist"
              >
                + Add Stock
              </button>
            </div>
          </div>

          {dashboard.stocks.length === 0 ? (
            <div className="empty">
              <div className="empty-icon">📋</div>
              <h3>Your watchlist is empty</h3>
              <p>Add stocks to start tracking the market.</p>
              <button
                className="btn-primary"
                onClick={openAddStock}
                style={{ marginTop: "18px" }}
              >
                + Add Stock
              </button>
            </div>
          ) : (
            <div className="stock-grid">
              {dashboard.stocks.map((stock) => {
                const delta = getPriceDelta(stock);
                const trend = getStockTrend(stock);
                const isUp = trend === "rising";
                const isDown = trend === "falling";

                return (
                  <article
                    className="stock-card"
                    key={stock.watchlistItemId}
                    aria-label={`${stock.symbol} stock card`}
                  >
                    {/* ── Card Header ── */}
                    <div className="stock-top">
                      <div className="stock-identity">
                        <div className="stock-symbol-row">
                          <h3 className="stock-symbol">{stock.symbol}</h3>
                          <span
                            className={`trend-badge trend-${trend}`}
                            aria-label={`Price trend: ${trend}`}
                          >
                            {isUp ? "↑ Rising" : isDown ? "↓ Falling" : "→ Stable"}
                          </span>
                        </div>
                        <p className="stock-name">{stock.name}</p>
                        <span className="exchange">{stock.exchange}</span>
                      </div>

                      <button
                        className="remove-btn"
                        onClick={() => setRemoveTarget(stock)}
                        aria-label={`Remove ${stock.symbol} from watchlist`}
                        title="Remove from watchlist"
                      >
                        ✕
                      </button>
                    </div>

                    {/* ── Price Block ── */}
                    <div className="stock-price-block">
                      <div className="price-main">
                        <span className="price-label">Current Price</span>
                        <span className="price-value">
                          {fmt(stock.currentPrice)}
                        </span>
                      </div>

                      {delta && (
                        <div
                          className={`price-delta ${delta.delta >= 0 ? "positive" : "negative"}`}
                        >
                          <span>
                            {delta.delta >= 0 ? "+" : ""}
                            {fmt(delta.delta.toFixed(2))}
                          </span>
                          <span className="delta-pct">
                            {delta.delta >= 0 ? "+" : ""}
                            {delta.pct.toFixed(2)}%
                          </span>
                          <span className="delta-label">{delta.label}</span>
                        </div>
                      )}

                      {!delta && !stock.purchasePrice && (
                        <div className="price-delta neutral">
                          <span>
                            {isMarketHours()
                              ? "No significant change"
                              : "Market closed"}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* ── Details ── */}
                    <div className="stock-details">
                      <div className="stock-detail-item">
                        <span className="detail-label">Intent</span>
                        <span
                          className={`intent-badge intent-${stock.intent.toLowerCase()}`}
                        >
                          {stock.intent === "HOLDING" ? "📦 Holding" : "👁 Interested"}
                        </span>
                      </div>

                      {stock.purchasePrice && (
                        <div className="stock-detail-item">
                          <span className="detail-label">Purchase Price</span>
                          <strong className="detail-value">
                            {fmt(stock.purchasePrice)}
                          </strong>
                        </div>
                      )}

                      {stock.targetPrice && (
                        <div className="stock-detail-item">
                          <span className="detail-label">Target Price</span>
                          <strong className="detail-value text-success">
                            {fmt(stock.targetPrice)}
                          </strong>
                        </div>
                      )}
                    </div>

                    {/* ── Footer ── */}
                    <div className="stock-footer">
                      <span className="stock-updated">
                        {stock.fetchedAt
                          ? `Updated ${timeAgo(stock.fetchedAt)}`
                          : stock.marketTimestamp
                            ? `Market: ${fmtTime(stock.marketTimestamp)}`
                            : "No data yet"}
                      </span>
                      <Link
                        to={`/stocks/${stock.symbol}`}
                        className="view-btn"
                      >
                        View Chart →
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* ── Smart Attention ── */}
        <section className="section" aria-label="Smart Attention">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SMART ATTENTION</p>
              <h2>Things You Should Know</h2>
            </div>
            <span className="count">
              {dashboard.attention.length} event
              {dashboard.attention.length !== 1 ? "s" : ""}
            </span>
          </div>

          {dashboard.attention.length === 0 ? (
            <div className="empty">
              <div className="empty-icon">✓</div>
              <h3>Nothing needs your attention</h3>
              <p>Your watchlist is quiet right now.</p>
            </div>
          ) : (
            <div className="attention-list">
              {dashboard.attention.map((event) => {
                const isPositive =
                  Number(event.changePercent ?? 0) >= 0;

                return (
                  <article
                    className={`attention-card severity-${event.severity.toLowerCase()}`}
                    key={event.id}
                    aria-label={`Attention event for ${event.symbol}`}
                  >
                    {/* Severity strip */}
                    <div
                      className={`attention-strip severity-strip-${event.severity.toLowerCase()}`}
                    />

                    <div className="attention-body">
                      {/* Header row */}
                      <div className="attention-header">
                        <div className="attention-stock">
                          <span className="attention-event-icon">
                            {attentionIcon(event.type)}
                          </span>
                          <div>
                            <strong className="attention-symbol">
                              {event.symbol}
                            </strong>
                            <span className="attention-name">
                              {event.name}
                            </span>
                          </div>
                        </div>

                        <div className="attention-meta">
                          <span className="attention-type-label">
                            {attentionTypeLabel(event.type)}
                          </span>
                          <span
                            className={`severity-badge severity-badge-${event.severity.toLowerCase()}`}
                          >
                            {event.severity}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="attention-description">
                        {attentionDescription(event)}
                      </p>

                      {/* Price journey */}
                      <div className="attention-prices">
                        <div className="price-journey">
                          <span className="journey-price">
                            {fmt(event.previousPrice)}
                          </span>
                          <span className="journey-arrow">→</span>
                          <strong className="journey-price journey-current">
                            {fmt(event.currentPrice)}
                          </strong>
                          {event.changePercent !== null && (
                            <span
                              className={`journey-pct ${isPositive ? "positive" : "negative"}`}
                            >
                              {isPositive ? "+" : ""}
                              {Number(event.changePercent).toFixed(2)}%
                            </span>
                          )}
                        </div>

                        <span className="attention-time">
                          {timeAgo(event.detectedAt)}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </main>

      <footer>
        <p>Smart Market Watchlist · Intelligent market attention</p>
        {lastRefreshed && (
          <p className="footer-updated">
            Last refreshed at {fmtTime(lastRefreshed.toISOString())}
          </p>
        )}
      </footer>

      {/* ── Add Stock Modal ── */}
      {showAddStock && (
        <div
          className="modal-overlay"
          onClick={closeAddStock}
          role="dialog"
          aria-modal="true"
          aria-label="Add a stock to your watchlist"
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <p className="eyebrow">WATCHLIST</p>
                <h2>Add a Stock</h2>
              </div>
              <button
                className="close-btn"
                onClick={closeAddStock}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {!selectedStock ? (
              <>
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search by symbol or company name…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    autoFocus
                    aria-label="Search stocks"
                  />
                </div>

                <div
                  className="stock-selection-list"
                  role="listbox"
                  aria-label="Available stocks"
                >
                  {filteredStocks.length === 0 ? (
                    <div className="modal-empty">
                      <p>No stocks found matching "{search}"</p>
                    </div>
                  ) : (
                    filteredStocks.map((stock) => {
                      const alreadyAdded = dashboard.stocks.some(
                        (s) => s.stockId === stock.id
                      );
                      return (
                        <button
                          className={`stock-option ${alreadyAdded ? "stock-option-added" : ""}`}
                          key={stock.id}
                          onClick={() => {
                            if (!alreadyAdded)
                              setSelectedStock(stock);
                            else
                              setAddError(
                                "This stock is already in your watchlist."
                              );
                          }}
                          role="option"
                          aria-selected={alreadyAdded}
                          disabled={alreadyAdded}
                        >
                          <div>
                            <strong>{stock.symbol}</strong>
                            <span>{stock.name}</span>
                          </div>
                          <div className="stock-option-right">
                            <span className="exchange">
                              {stock.exchange}
                            </span>
                            {alreadyAdded && (
                              <span className="already-added-badge">
                                Added
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>

                {addError && (
                  <div className="form-error">{addError}</div>
                )}
              </>
            ) : (
              <>
                <div className="selected-stock">
                  <div>
                    <span className="eyebrow">SELECTED STOCK</span>
                    <h3>{selectedStock.symbol}</h3>
                    <p>
                      {selectedStock.name} · {selectedStock.exchange}
                    </p>
                  </div>
                  <button
                    className="change-stock"
                    onClick={() => {
                      setSelectedStock(null);
                      setAddError("");
                    }}
                  >
                    Change
                  </button>
                </div>

                <div className="form-group">
                  <label>How are you tracking this stock?</label>
                  <div className="intent-options">
                    <button
                      type="button"
                      className={`intent-option ${intent === "HOLDING" ? "active" : ""}`}
                      onClick={() => setIntent("HOLDING")}
                      aria-pressed={intent === "HOLDING"}
                    >
                      <strong>📦 Holding</strong>
                      <span>I already own this stock</span>
                    </button>
                    <button
                      type="button"
                      className={`intent-option ${intent === "INTERESTED" ? "active" : ""}`}
                      onClick={() => setIntent("INTERESTED")}
                      aria-pressed={intent === "INTERESTED"}
                    >
                      <strong>👁 Interested</strong>
                      <span>I am watching this stock</span>
                    </button>
                  </div>
                </div>

                {intent === "HOLDING" && (
                  <div className="form-group">
                    <label htmlFor="purchasePrice">
                      Purchase Price <span className="required">*</span>
                    </label>
                    <div className="input-with-prefix">
                      <span className="input-prefix">₹</span>
                      <input
                        id="purchasePrice"
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="e.g. 1000"
                        value={purchasePrice}
                        onChange={(e) => setPurchasePrice(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="targetPrice">
                    Target Price{" "}
                    <span className="optional">(optional)</span>
                  </label>
                  <div className="input-with-prefix">
                    <span className="input-prefix">₹</span>
                    <input
                      id="targetPrice"
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="e.g. 1500"
                      value={targetPrice}
                      onChange={(e) => setTargetPrice(e.target.value)}
                    />
                  </div>
                </div>

                {addError && (
                  <div className="form-error">{addError}</div>
                )}

                <button
                  className="btn-primary btn-full"
                  onClick={handleAddStock}
                  disabled={adding}
                >
                  {adding ? (
                    <>
                      <span className="btn-spinner" /> Adding…
                    </>
                  ) : (
                    "Add to Watchlist"
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── Remove Confirmation Modal ── */}
      {removeTarget && (
        <div
          className="modal-overlay"
          onClick={() => !removing && setRemoveTarget(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Confirm removal of ${removeTarget.symbol}`}
        >
          <div
            className="modal modal-confirm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="confirm-icon" aria-hidden="true">
              🗑️
            </div>
            <h2>Remove {removeTarget.symbol}?</h2>
            <p className="confirm-desc">
              This will remove{" "}
              <strong>{removeTarget.name}</strong> from your watchlist.
              Existing attention history will be preserved.
            </p>

            <div className="confirm-actions">
              <button
                className="btn-ghost"
                onClick={() => setRemoveTarget(null)}
                disabled={removing}
              >
                Cancel
              </button>
              <button
                className="btn-danger"
                onClick={handleRemoveConfirm}
                disabled={removing}
              >
                {removing ? "Removing…" : "Remove Stock"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;