import { useState, useEffect } from "react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

import { API_URL as API } from "../config";

interface AttentionEvent {
    id: string;
    type: "LARGE_PRICE_CHANGE" | "TARGET_REACHED" | "PURCHASE_PRICE_CROSSED" | "VOLUME_SPIKE" | string;
    severity: "LOW" | "MEDIUM" | "HIGH";
    previousPrice: number;
    currentPrice: number;
    changePercent: number;
    detectedAt: string;
    stock: {
        symbol: string;
        name: string;
        exchange: string;
    };
}

type FilterKey = "all" | "high" | "medium" | "low" | "price" | "target" | "volume";

function formatINR(n: number | string | null | undefined) {
    if (n == null) return "—";
    const num = typeof n === "number" ? n : parseFloat(String(n));
    if (isNaN(num)) return "—";
    return new Intl.NumberFormat("en-IN", {
        style: "currency", currency: "INR",
        minimumFractionDigits: 2, maximumFractionDigits: 2,
    }).format(num);
}

function getTimeSince(iso: string) {
    try { return formatDistanceToNow(new Date(iso), { addSuffix: true }); }
    catch { return "recently"; }
}

const EVENT_ICON: Record<string, string> = {
    LARGE_PRICE_CHANGE: "📊",
    TARGET_REACHED: "🎯",
    PURCHASE_PRICE_CROSSED: "💰",
    VOLUME_SPIKE: "📈",
};

const EVENT_LABEL: Record<string, string> = {
    LARGE_PRICE_CHANGE: "Large Price Change",
    TARGET_REACHED: "Target Reached",
    PURCHASE_PRICE_CROSSED: "Purchase Price Crossed",
    VOLUME_SPIKE: "Volume Spike",
};

export default function AlertsPage() {
    const [events, setEvents] = useState<AttentionEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState<FilterKey>("all");

    const load = async () => {
        try {
            setLoading(true);
            setError(null);
            const [attnRes, dashRes] = await Promise.all([
                axios.get(`${API}/attention`).catch(() => ({ data: { events: [] } })),
                axios.get(`${API}/dashboard`).catch(() => ({ data: { dashboard: null } })),
            ]);

            const rawList = Array.isArray(attnRes.data?.events)
                ? attnRes.data.events
                : Array.isArray(attnRes.data)
                ? attnRes.data
                : Array.isArray(dashRes.data?.dashboard?.attention)
                ? dashRes.data.dashboard.attention
                : [];

            const seen = new Set<string>();
            const parsed: AttentionEvent[] = [];

            for (const e of rawList) {
                const id = e.id || `${e.type}-${e.stock?.symbol || e.symbol}-${e.detectedAt}`;
                if (seen.has(id)) continue;
                seen.add(id);

                parsed.push({
                    id,
                    type: e.type,
                    severity: e.severity || "MEDIUM",
                    previousPrice: e.previousPrice != null ? parseFloat(String(e.previousPrice)) : 0,
                    currentPrice: e.currentPrice != null ? parseFloat(String(e.currentPrice)) : 0,
                    changePercent: e.changePercent != null ? parseFloat(String(e.changePercent)) : 0,
                    detectedAt: e.detectedAt || e.marketTimestamp || new Date().toISOString(),
                    stock: {
                        symbol: e.stock?.symbol || e.symbol || "UNKNOWN",
                        name: e.stock?.name || e.name || e.symbol || "Unknown",
                        exchange: e.stock?.exchange || e.exchange || "NSE",
                    },
                });
            }

            // Sort newest first
            parsed.sort(
                (a, b) => new Date(b.detectedAt).getTime() - new Date(a.detectedAt).getTime()
            );

            setEvents(parsed);
        } catch {
            setError("Failed to load alerts. Is the backend running?");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { load(); }, []);

    const filtered = events.filter((e) => {
        if (filter === "all") return true;
        if (filter === "high") return e.severity === "HIGH";
        if (filter === "medium") return e.severity === "MEDIUM";
        if (filter === "low") return e.severity === "LOW";
        if (filter === "price") return e.type === "LARGE_PRICE_CHANGE";
        if (filter === "target") return e.type === "TARGET_REACHED";
        if (filter === "volume") return e.type === "VOLUME_SPIKE";
        return true;
    });

    const counts = {
        high: events.filter((e) => e.severity === "HIGH").length,
        medium: events.filter((e) => e.severity === "MEDIUM").length,
        low: events.filter((e) => e.severity === "LOW").length,
    };

    if (loading) {
        return (
            <div className="page">
                <div className="page-topbar">
                    <div className="page-topbar-left">
                        <p className="eyebrow">SMART ATTENTION</p>
                        <h1 className="page-title">Alerts</h1>
                    </div>
                </div>
                <div className="page-body">
                    <div className="skeleton-section">
                        {[0,1,2,3,4].map((i) => <div key={i} className="skeleton skeleton-stock" />)}
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
                    <h2>Alerts unavailable</h2>
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
                    <p className="eyebrow">SMART ATTENTION</p>
                    <h1 className="page-title">Alerts</h1>
                    <p className="page-subtitle">
                        {events.length} event{events.length !== 1 ? "s" : ""} detected ·{" "}
                        <span style={{ color: "var(--negative)" }}>{counts.high} high</span>
                        {" · "}
                        <span style={{ color: "var(--warning)" }}>{counts.medium} medium</span>
                        {" · "}
                        <span style={{ color: "var(--text-muted)" }}>{counts.low} low</span>
                    </p>
                </div>
                <div className="page-topbar-right">
                    <button className="btn-ghost" onClick={load}>↺ Refresh</button>
                </div>
            </div>

            <div className="page-body">
                {/* Filter tabs */}
                <div className="filter-bar">
                    <div className="filter-tabs">
                        {[
                            { key: "all", label: `All (${events.length})` },
                            { key: "high", label: `🔴 High (${counts.high})` },
                            { key: "medium", label: `🟡 Medium (${counts.medium})` },
                            { key: "low", label: `🔵 Low (${counts.low})` },
                            { key: "price", label: "Price Change" },
                            { key: "target", label: "Target" },
                            { key: "volume", label: "Volume" },
                        ].map((f) => (
                            <button
                                key={f.key}
                                className={`filter-tab ${filter === f.key ? "active" : ""}`}
                                onClick={() => setFilter(f.key as FilterKey)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Alert feed */}
                {filtered.length === 0 ? (
                    <div className="empty">
                        <div className="empty-icon">✅</div>
                        <h3>
                            {filter === "all" ? "Your watchlist is quiet" : `No ${filter} alerts`}
                        </h3>
                        <p>
                            {filter === "all"
                                ? "No significant events detected. The market is calm."
                                : "Try selecting a different filter."}
                        </p>
                    </div>
                ) : (
                    <div className="attention-list">
                        {filtered.map((evt, idx) => {
                            const isPos = evt.changePercent > 0;
                            const icon = EVENT_ICON[evt.type] ?? "📌";
                            const label = EVENT_LABEL[evt.type] ?? evt.type.replace(/_/g, " ");
                            const severityClass =
                                evt.severity === "HIGH"
                                    ? "severity-high"
                                    : evt.severity === "MEDIUM"
                                    ? "severity-medium"
                                    : "severity-low";
                            const stripClass =
                                evt.severity === "HIGH"
                                    ? "severity-strip-high"
                                    : evt.severity === "MEDIUM"
                                    ? "severity-strip-medium"
                                    : "severity-strip-low";
                            const badgeClass =
                                evt.severity === "HIGH"
                                    ? "severity-badge-high"
                                    : evt.severity === "MEDIUM"
                                    ? "severity-badge-medium"
                                    : "severity-badge-low";

                            return (
                                <div
                                    key={evt.id}
                                    className={`attention-card ${severityClass}`}
                                    style={{ animationDelay: `${idx * 0.04}s` }}
                                >
                                    <div className={`attention-strip ${stripClass}`} />
                                    <div className="attention-body">
                                        <div className="attention-header">
                                            <div className="attention-stock">
                                                <div className="attention-event-icon">{icon}</div>
                                                <div>
                                                    <span className="attention-symbol">{evt.stock.symbol}</span>
                                                    <span className="attention-name">{evt.stock.name}</span>
                                                </div>
                                            </div>
                                            <div className="attention-meta">
                                                <span className="attention-type-label">{label}</span>
                                                <span className={`severity-badge ${badgeClass}`}>
                                                    {evt.severity}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="attention-description">
                                            {getAlertDescription(evt)}
                                        </p>

                                        <div className="attention-prices">
                                            <div className="price-journey">
                                                <span className="journey-price">{formatINR(evt.previousPrice)}</span>
                                                <span className="journey-arrow">→</span>
                                                <span className="journey-current">{formatINR(evt.currentPrice)}</span>
                                                <span className={`journey-pct ${isPos ? "positive" : "negative"}`}>
                                                    {isPos ? "+" : ""}{evt.changePercent.toFixed(2)}%
                                                </span>
                                            </div>
                                            <span className="attention-time">{getTimeSince(evt.detectedAt)}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

function getAlertDescription(evt: AttentionEvent): string {
    const pct = Math.abs(evt.changePercent).toFixed(2);
    const dir = evt.changePercent > 0 ? "risen" : "fallen";
    switch (evt.type) {
        case "LARGE_PRICE_CHANGE":
            return `${evt.stock.symbol} has ${dir} significantly by ${pct}% since your last checkpoint.`;
        case "TARGET_REACHED":
            return `${evt.stock.symbol} has reached or crossed your target price. Consider reviewing your position.`;
        case "PURCHASE_PRICE_CROSSED":
            return `${evt.stock.symbol} has crossed your purchase price — now ${evt.changePercent > 0 ? "in profit" : "at a loss"}.`;
        case "VOLUME_SPIKE":
            return `Unusual volume activity detected in ${evt.stock.symbol}. Price moved ${pct}%.`;
        default:
            return `An event was detected in ${evt.stock.symbol}.`;
    }
}
