import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Cell,
    PieChart, Pie, Legend, ResponsiveContainer, CartesianGrid,
} from "recharts";

import { API_URL as API, DEFAULT_USER_ID as USER_ID } from "../config";

interface WatchlistItem {
    id: string;
    intent: "HOLDING" | "INTERESTED";
    purchasePrice: number | null;
    targetPrice: number | null;
    stock: { symbol: string; name: string; exchange: string };
    snapshot?: { price: number; changePercent: number; fetchedAt: string } | null;
}

interface AttentionEvent {
    id: string;
    severity: "LOW" | "MEDIUM" | "HIGH";
    type: string;
}

function formatINR(n: number) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency", currency: "INR",
        minimumFractionDigits: 2, maximumFractionDigits: 2,
    }).format(n);
}

const CHART_COLORS = {

    positive: "#10B981",
    negative: "#EF4444",
    purple: "#8B5CF6",
    warning: "#F59E0B",
    muted: "#55556A",
};

const TOOLTIP_STYLE = {
    backgroundColor: "#11111E",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 10,
    color: "#F2F2F7",
    fontSize: 13,
};

export default function InsightsPage() {
    const [items, setItems] = useState<WatchlistItem[]>([]);
    const [attention, setAttention] = useState<AttentionEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const load = async () => {
        try {
            setLoading(true);
            setError(null);
            const [dashRes, attnRes] = await Promise.all([
                axios.get(`${API}/dashboard/${USER_ID}`).catch(() => ({ data: { dashboard: null } })),
                axios.get(`${API}/attention/${USER_ID}`).catch(() => ({ data: { events: [] } })),
            ]);

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
                        symbol: s.symbol || "UNKNOWN",
                        name: s.name || s.symbol || "Unknown",
                        exchange: s.exchange || "NSE",
                    },
                    snapshot: cp != null ? {
                        price: cp,
                        changePercent,
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
                    severity: a.severity || "MEDIUM",
                    type: a.type || "ALERT",
                });
            }
            setAttention(normalizedAttn);
        } catch {
            setError("Failed to load insights data.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { load(); }, []);

    const insights = useMemo(() => {
        const holdings = items.filter((i) => i.intent === "HOLDING");
        const interested = items.filter((i) => i.intent === "INTERESTED");

        const withPerf = items
            .filter((i) => i.snapshot?.price != null && i.purchasePrice != null)
            .map((i) => ({
                ...i,
                perfPct: ((i.snapshot!.price - i.purchasePrice!) / i.purchasePrice!) * 100,
            }));

        const sorted = [...withPerf].sort((a, b) => b.perfPct - a.perfPct);
        const best  = sorted[0] ?? null;
        const worst = sorted[sorted.length - 1] ?? null;

        const withTarget = items
            .filter((i) => i.snapshot?.price != null && i.targetPrice != null)
            .map((i) => ({
                ...i,
                targetProgress: (i.snapshot!.price / i.targetPrice!) * 100,
            }))
            .sort((a, b) => b.targetProgress - a.targetProgress);

        const closestToTarget = withTarget[0] ?? null;

        const alertCounts = {
            high: attention.filter((a) => a.severity === "HIGH").length,
            medium: attention.filter((a) => a.severity === "MEDIUM").length,
            low: attention.filter((a) => a.severity === "LOW").length,
        };

        const abovePurchase = withPerf.filter((i) => i.perfPct > 0).length;
        const belowPurchase = withPerf.filter((i) => i.perfPct < 0).length;

        // Chart data
        const perfData = withPerf.map((i) => ({
            symbol: i.stock.symbol,
            pct: parseFloat(i.perfPct.toFixed(2)),
        }));

        const intentPie = [
            { name: "Holding", value: holdings.length, fill: CHART_COLORS.purple },
            { name: "Interested", value: interested.length, fill: CHART_COLORS.warning },
        ].filter((d) => d.value > 0);

        const alertPie = [
            { name: "High", value: alertCounts.high, fill: CHART_COLORS.negative },
            { name: "Medium", value: alertCounts.medium, fill: CHART_COLORS.warning },
            { name: "Low", value: alertCounts.low, fill: CHART_COLORS.purple },
        ].filter((d) => d.value > 0);

        return {
            total: items.length,
            holdings: holdings.length,
            interested: interested.length,
            best, worst,
            closestToTarget,
            alertCounts,
            abovePurchase,
            belowPurchase,
            perfData,
            intentPie,
            alertPie,
            withPerf,
        };
    }, [items, attention]);

    if (loading) {
        return (
            <div className="page">
                <div className="page-topbar">
                    <div className="page-topbar-left">
                        <p className="eyebrow">ANALYSIS</p>
                        <h1 className="page-title">Insights</h1>
                    </div>
                </div>
                <div className="page-body">
                    <div className="skeleton skeleton-hero" />
                    <div className="insight-grid">
                        {[0,1,2,3,4,5].map((i) => <div key={i} className="skeleton skeleton-card" />)}
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
                    <h2>Could not load insights</h2>
                    <p>{error}</p>
                    <button className="btn-primary" style={{ marginTop: 16 }} onClick={load}>Retry</button>
                </div>
            </div>
        );
    }

    if (insights.total === 0) {
        return (
            <div className="page">
                <div className="page-topbar">
                    <div className="page-topbar-left">
                        <p className="eyebrow">ANALYSIS</p>
                        <h1 className="page-title">Insights</h1>
                    </div>
                </div>
                <div className="page-body">
                    <div className="empty">
                        <div className="empty-icon">✦</div>
                        <h3>No data to analyse yet</h3>
                        <p>Add stocks to your watchlist to see personalised insights.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page">
            <div className="page-topbar">
                <div className="page-topbar-left">
                    <p className="eyebrow">ANALYSIS</p>
                    <h1 className="page-title">Insights</h1>
                    <p className="page-subtitle">Calculated from your real watchlist data</p>
                </div>
                <div className="page-topbar-right">
                    <button className="btn-ghost" onClick={load}>↺ Refresh</button>
                </div>
            </div>

            <div className="page-body">
                {/* Metric cards */}
                <div className="insight-grid">
                    {[
                        { icon: "📊", label: "Total Tracked", value: insights.total, desc: `${insights.holdings} holding · ${insights.interested} watching` },
                        { icon: "📈", label: "In Profit", value: insights.abovePurchase, desc: `vs ${insights.belowPurchase} below purchase price` },
                        { icon: "⚡", label: "Active Alerts", value: attention.length, desc: `${insights.alertCounts.high} high priority` },
                        { icon: "🎯", label: "With Targets", value: items.filter((i) => i.targetPrice != null).length, desc: "have a target price set" },
                    ].map((c, i) => (
                        <div key={c.label} className="insight-card" style={{ animationDelay: `${i * 0.05}s` }}>
                            <div className="insight-card-icon">{c.icon}</div>
                            <span className="insight-card-label">{c.label}</span>
                            <span className="insight-card-value">{c.value}</span>
                            <p className="insight-card-desc">{c.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Narrative cards */}
                <div className="section">
                    <div className="section-heading"><h2>Key Findings</h2></div>
                    <div className="skeleton-section" style={{ gap: 10 }}>
                        {insights.best && (
                            <div className="narrative-card">
                                <span className="narrative-icon">🏆</span>
                                <p className="narrative-text">
                                    <strong>{insights.best.stock.symbol}</strong> is your best performer at{" "}
                                    <strong style={{ color: "var(--positive)" }}>
                                        +{insights.best.perfPct.toFixed(2)}%
                                    </strong>{" "}
                                    above purchase price ({formatINR(insights.best.purchasePrice!)} → {formatINR(insights.best.snapshot!.price)}).
                                </p>
                            </div>
                        )}
                        {insights.worst && insights.worst.perfPct < 0 && (
                            <div className="narrative-card" style={{ borderLeftColor: "var(--negative)" }}>
                                <span className="narrative-icon">📉</span>
                                <p className="narrative-text">
                                    <strong>{insights.worst.stock.symbol}</strong> is down{" "}
                                    <strong style={{ color: "var(--negative)" }}>
                                        {insights.worst.perfPct.toFixed(2)}%
                                    </strong>{" "}
                                    from your purchase price.
                                </p>
                            </div>
                        )}
                        {insights.closestToTarget && (
                            <div className="narrative-card" style={{ borderLeftColor: "var(--warning)" }}>
                                <span className="narrative-icon">🎯</span>
                                <p className="narrative-text">
                                    <strong>{insights.closestToTarget.stock.symbol}</strong> is closest to its target price at{" "}
                                    <strong style={{ color: "var(--warning)" }}>
                                        {Math.min(insights.closestToTarget.targetProgress, 100).toFixed(1)}%
                                    </strong>{" "}
                                    progress ({formatINR(insights.closestToTarget.snapshot!.price)} of {formatINR(insights.closestToTarget.targetPrice!)}).
                                </p>
                            </div>
                        )}
                        {insights.alertCounts.high > 0 && (
                            <div className="narrative-card" style={{ borderLeftColor: "var(--negative)" }}>
                                <span className="narrative-icon">🔴</span>
                                <p className="narrative-text">
                                    You have <strong>{insights.alertCounts.high} high-priority</strong> alert
                                    {insights.alertCounts.high > 1 ? "s" : ""} requiring attention.
                                </p>
                            </div>
                        )}
                        {insights.abovePurchase > 0 && insights.total > 0 && (
                            <div className="narrative-card">
                                <span className="narrative-icon">💡</span>
                                <p className="narrative-text">
                                    <strong>{insights.abovePurchase} of {insights.withPerf.length}</strong> tracked stocks are currently above their purchase price.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Performance bar chart */}
                {insights.perfData.length > 0 && (
                    <div className="chart-container">
                        <h3>Performance vs Purchase Price (%)</h3>
                        <ResponsiveContainer width="100%" height={280}>
                            <BarChart data={insights.perfData} margin={{ top: 8, right: 16, left: -10, bottom: 4 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" vertical={false} />
                                <XAxis dataKey="symbol" tick={{ fill: "var(--text-muted)", fontSize: 12, fontWeight: 600 }} axisLine={{ stroke: "rgba(255,255,255,0.08)" }} tickLine={false} />
                                <YAxis tick={{ fill: "var(--text-muted)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                                <Tooltip
                                    contentStyle={TOOLTIP_STYLE}
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    formatter={((v: any) => [`${Number(v) > 0 ? "+" : ""}${Number(v).toFixed(2)}%`, "Gain/Loss"]) as any}
                                    cursor={{ fill: "rgba(255,255,255,0.03)" }}
                                />
                                <Bar dataKey="pct" radius={[6, 6, 0, 0]}>
                                    {insights.perfData.map((entry, idx) => (
                                        <Cell key={idx} fill={entry.pct >= 0 ? CHART_COLORS.positive : CHART_COLORS.negative} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                )}

                {/* Pie charts */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
                    {insights.intentPie.length > 0 && (
                        <div className="chart-container">
                            <h3>Holding vs Watching</h3>
                            <ResponsiveContainer width="100%" height={240}>
                                <PieChart>
                                    <Pie data={insights.intentPie} cx="50%" cy="50%" innerRadius={65} outerRadius={95}
                                        dataKey="value" nameKey="name" paddingAngle={4}>
                                        {insights.intentPie.map((entry, i) => (
                                            <Cell key={i} fill={entry.fill} />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={TOOLTIP_STYLE} />
                                    <Legend iconType="circle" wrapperStyle={{ fontSize: 13, color: "var(--text-secondary)", paddingTop: 8 }} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                    {insights.alertPie.length > 0 && (
                        <div className="chart-container">
                            <h3>Alert Severity Breakdown</h3>
                            <ResponsiveContainer width="100%" height={240}>
                                <PieChart>
                                    <Pie data={insights.alertPie} cx="50%" cy="50%" innerRadius={65} outerRadius={95}
                                        dataKey="value" nameKey="name" paddingAngle={4}>
                                        {insights.alertPie.map((entry, i) => (
                                            <Cell key={i} fill={entry.fill} />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={TOOLTIP_STYLE} />
                                    <Legend iconType="circle" wrapperStyle={{ fontSize: 13, color: "var(--text-secondary)", paddingTop: 8 }} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
