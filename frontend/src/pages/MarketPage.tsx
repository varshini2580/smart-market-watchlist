import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { API_URL as API, DEFAULT_USER_ID as USER_ID } from "../config";

interface MarketStatus {
    isOpen: boolean;
    status: string;
    message: string;
    timestamp: string;
}

interface Snapshot {
    price: number;
    changePercent: number;
    previousClose: number;
    fetchedAt: string;
}

interface WatchlistItem {
    id: string;
    intent: "HOLDING" | "INTERESTED";
    purchasePrice: number | null;
    targetPrice: number | null;
    stock: { id: string; symbol: string; name: string; exchange: string };
    snapshot?: Snapshot | null;
}

interface AttentionEvent {
    id: string;
    type: string;
    severity: "LOW" | "MEDIUM" | "HIGH";
    changePercent: number;
    stock: { symbol: string; name: string };
}




export default function MarketPage() {
    const [marketStatus, setMarketStatus] = useState<MarketStatus | null>(null);
    const [items, setItems] = useState<WatchlistItem[]>([]);
    const [attention, setAttention] = useState<AttentionEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const load = async () => {
        try {
            setLoading(true);
            setError(null);
            const [statusRes, dashRes, attnRes] = await Promise.all([
                axios.get(`${API}/market/status`, { timeout: 6000 }).catch(() => ({ data: null })),
                axios.get(`${API}/dashboard/${USER_ID}`, { timeout: 6000 }).catch(() => ({ data: { dashboard: null } })),
                axios.get(`${API}/attention/${USER_ID}`, { timeout: 6000 }).catch(() => ({ data: { events: [] } })),
            ]);

            const statusData = statusRes.data;
            if (statusData) {
                setMarketStatus({
                    isOpen: statusData.status === "OPEN" || statusData.isOpen === true,
                    status: statusData.status || "CLOSED",
                    message: statusData.message || (statusData.status === "OPEN" ? "Regular market session active" : "NSE is currently closed"),
                    timestamp: statusData.timestamp || new Date().toISOString(),
                });
            }

            const dashStocks = Array.isArray(dashRes.data?.dashboard?.stocks)
                ? dashRes.data.dashboard.stocks
                : [];

            const mappedItems: WatchlistItem[] = dashStocks.map((s: any) => {
                const cp = s.currentPrice != null ? parseFloat(s.currentPrice) : null;
                const pp = s.purchasePrice != null ? parseFloat(s.purchasePrice) : null;
                let changePercent = 0;
                if (cp != null && pp != null && pp > 0) {
                    changePercent = ((cp - pp) / pp) * 100;
                }
                return {
                    id: s.watchlistItemId || s.stockId,
                    intent: s.intent || "HOLDING",
                    purchasePrice: pp,
                    targetPrice: s.targetPrice != null ? parseFloat(s.targetPrice) : null,
                    stock: {
                        id: s.stockId,
                        symbol: s.symbol || "UNKNOWN",
                        name: s.name || s.symbol || "Unknown",
                        exchange: s.exchange || "NSE",
                    },
                    snapshot: cp != null ? {
                        price: cp,
                        changePercent,
                        previousClose: pp || cp,
                        fetchedAt: s.fetchedAt || s.marketTimestamp || new Date().toISOString(),
                    } : null,
                };
            });
            setItems(mappedItems);

            const rawAttn = Array.isArray(attnRes.data?.events)
                ? attnRes.data.events
                : Array.isArray(attnRes.data)
                ? attnRes.data
                : Array.isArray(dashRes.data?.dashboard?.attention)
                ? dashRes.data.dashboard.attention
                : [];

            const seenIds = new Set<string>();
            const normalizedAttn: AttentionEvent[] = [];
            for (const a of rawAttn) {
                const id = a.id || `${a.type}-${a.stock?.symbol || a.symbol}-${a.detectedAt}`;
                if (seenIds.has(id)) continue;
                seenIds.add(id);
                normalizedAttn.push({
                    id,
                    type: a.type || "MARKET_ALERT",
                    severity: a.severity || "MEDIUM",
                    changePercent: a.changePercent != null ? parseFloat(a.changePercent) : 0,
                    stock: {
                        symbol: a.stock?.symbol || a.symbol || "UNKNOWN",
                        name: a.stock?.name || a.name || a.symbol || "Unknown",
                    },
                });
            }
            setAttention(normalizedAttn);
        } catch {
            setError("Failed to load market data.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { load(); }, []);

    // Derive movers from watchlist items with snapshots
    const movers = useMemo(() => {
        return items
            .filter((i) => i.snapshot?.price != null && i.purchasePrice != null)
            .map((i) => ({
                ...i,
                gainPct: ((i.snapshot!.price - i.purchasePrice!) / i.purchasePrice!) * 100,
                dayPct: i.snapshot?.changePercent ?? 0,
            }))
            .sort((a, b) => b.gainPct - a.gainPct);
    }, [items]);

    const gainers = movers.filter((m) => m.gainPct > 0);
    const losers = [...movers].filter((m) => m.gainPct < 0).reverse();

    const highAlerts = attention.filter((a) => a.severity === "HIGH");

    const statusClass =
        marketStatus?.isOpen
            ? "status-open"
            : marketStatus?.status?.toLowerCase().includes("pre")
            ? "status-preopen"
            : "status-closed";

    const statusLabel =
        marketStatus == null
            ? "Status Unknown"
            : marketStatus.isOpen
            ? "Market Open"
            : "Market Closed";

    if (loading) {
        return (
            <div className="page">
                <div className="page-topbar">
                    <div className="page-topbar-left">
                        <p className="eyebrow">MARKET</p>
                        <h1 className="page-title">Market Overview</h1>
                    </div>
                </div>
                <div className="page-body">
                    <div className="skeleton skeleton-hero" />
                    <div className="skeleton-grid">
                        {[0,1,2,3].map((i) => <div key={i} className="skeleton skeleton-card" />)}
                    </div>
                    <div className="skeleton-section">
                        {[0,1,2].map((i) => <div key={i} className="skeleton skeleton-stock" />)}
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="page">
                <div className="error-screen">
                    <div className="error-icon">⚠️</div>
                    <h2>Market data unavailable</h2>
                    <p>{error}</p>
                    <button className="btn-primary" style={{ marginTop: 16 }} onClick={load}>Retry</button>
                </div>
            </div>
        );
    }

    return (
        <div className="page">
            <div className="page-topbar">
                <div className="page-topbar-left">
                    <p className="eyebrow">MARKET</p>
                    <h1 className="page-title">Market Overview</h1>
                    <p className="page-subtitle">Derived from your watchlist — real data only</p>
                </div>
                <div className="page-topbar-right">
                    <button className="btn-ghost" onClick={load} title="Refresh">↺ Refresh</button>
                </div>
            </div>

            <div className="page-body">
                {/* Market Status Banner */}
                <div className={`market-status-banner ${statusClass}`}>
                    <div className="market-status-left">
                        <div className="market-status-dot" />
                        <div className="market-status-text">
                            <strong>{statusLabel}</strong>
                            <span>
                                {marketStatus?.message ?? "Market status unavailable"} ·{" "}
                                {new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })} IST
                            </span>
                        </div>
                    </div>
                    <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                        NSE / BSE
                    </div>
                </div>

                {/* Summary metrics */}
                <div className="metric-grid">
                    {[
                        { label: "Tracked Stocks", value: items.length, icon: "📊" },
                        { label: "Gainers", value: gainers.length, icon: "📈" },
                        { label: "Losers", value: losers.length, icon: "📉" },
                        { label: "High Alerts", value: highAlerts.length, icon: "🔴" },
                    ].map((m, i) => (
                        <div
                            key={m.label}
                            className="metric-card"
                            style={{ animationDelay: `${i * 0.05}s` }}
                        >
                            <div style={{ fontSize: 22 }}>{m.icon}</div>
                            <span className="metric-label">{m.label}</span>
                            <span className="metric-value">{m.value}</span>
                        </div>
                    ))}
                </div>

                {/* Gainers */}
                {gainers.length > 0 && (
                    <div className="section">
                        <div className="section-heading">
                            <h2>📈 Top Performers</h2>
                            <span className="count">{gainers.length} stocks</span>
                        </div>
                        <div className="stock-grid">
                            {gainers.slice(0, 6).map((item, idx) => (
                                <MoverCard key={item.id} item={item} gainPct={item.gainPct} idx={idx} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Losers */}
                {losers.length > 0 && (
                    <div className="section">
                        <div className="section-heading">
                            <h2>📉 Underperformers</h2>
                            <span className="count">{losers.length} stocks</span>
                        </div>
                        <div className="stock-grid">
                            {losers.slice(0, 6).map((item, idx) => (
                                <MoverCard key={item.id} item={item} gainPct={item.gainPct} idx={idx} />
                            ))}
                        </div>
                    </div>
                )}

                {/* High-priority alerts summary */}
                {highAlerts.length > 0 && (
                    <div className="section">
                        <div className="section-heading">
                            <h2>🔴 Attention Required</h2>
                            <Link to="/alerts" className="view-btn">View all alerts →</Link>
                        </div>
                        <div className="attention-list">
                            {highAlerts.slice(0, 3).map((a) => (
                                <div key={a.id} className="attention-card severity-high">
                                    <div className="attention-strip severity-strip-high" />
                                    <div className="attention-body">
                                        <div className="attention-header">
                                            <div className="attention-stock">
                                                <div className="attention-event-icon">⚡</div>
                                                <div>
                                                    <span className="attention-symbol">{a.stock.symbol}</span>
                                                    <span className="attention-name">{a.stock.name}</span>
                                                </div>
                                            </div>
                                            <span className="severity-badge severity-badge-high">HIGH</span>
                                        </div>
                                        <p className="attention-description">
                                            {a.type.replace(/_/g, " ")} detected.
                                            Change: {a.changePercent > 0 ? "+" : ""}{a.changePercent.toFixed(2)}%
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Empty state if no watchlist data */}
                {items.length === 0 && (
                    <div className="empty">
                        <div className="empty-icon">📊</div>
                        <h3>No market data yet</h3>
                        <p>Add stocks to your watchlist to see market movers.</p>
                        <Link to="/watchlist" className="btn-primary" style={{ marginTop: 16, display: "inline-flex" }}>
                            Go to Watchlist
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

function MoverCard({ item, gainPct, idx }: { item: WatchlistItem & { dayPct: number }; gainPct: number; idx: number }) {
    const isGain = gainPct >= 0;
    const snap = item.snapshot;
    return (
        <div className="stock-card" style={{ animationDelay: `${idx * 0.05}s` }}>
            <div className="stock-top">
                <div className="stock-identity">
                    <div className="stock-symbol-row">
                        <h3 className="stock-symbol">{item.stock.symbol}</h3>
                        <span className={`trend-badge ${isGain ? "trend-rising" : "trend-falling"}`}>
                            {isGain ? "▲" : "▼"} {Math.abs(gainPct).toFixed(2)}%
                        </span>
                    </div>
                    <p className="stock-name">{item.stock.name}</p>
                    <span className="exchange">{item.stock.exchange}</span>
                </div>
            </div>
            <div className="stock-price-block">
                <div className="price-main">
                    <span className="price-label">Price</span>
                    <span className="price-value">
                        {snap?.price != null
                            ? new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 2 }).format(snap.price)
                            : "—"}
                    </span>
                </div>
                <div className={`price-delta ${isGain ? "positive" : "negative"}`}>
                    <span>{isGain ? "+" : ""}{gainPct.toFixed(2)}%</span>
                    <span className="delta-label">vs purchase</span>
                </div>
            </div>
            <div className="stock-footer">
                <span className={`intent-badge ${item.intent === "HOLDING" ? "intent-holding" : "intent-interested"}`}>
                    {item.intent === "HOLDING" ? "Holding" : "Interested"}
                </span>
                <Link to={`/stocks/${item.stock.symbol}`} className="view-btn">View Chart →</Link>
            </div>
        </div>
    );
}
