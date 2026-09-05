import { useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

import { API_BASE as API_URL } from "./config";
import "./App.css";

type Range = "1d" | "1w" | "1m" | "3m" | "6m" | "1y";

type PricePoint = {
    timestamp: string;
    price: number;
    volume?: number;
};

type Snapshot = {
    price: number;
    volume?: number;
    marketTimestamp: string;
};

function formatINR(n: number | null | undefined) {
    if (n == null || isNaN(n)) return "—";
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(n);
}

function CustomTooltip({ active, payload, label }: any) {
    if (active && payload && payload.length) {
        const val = payload[0].value;
        return (
            <div className="custom-stock-tooltip">
                <p className="tooltip-date">{label}</p>
                <p className="tooltip-price">{formatINR(val)}</p>
            </div>
        );
    }
    return null;
}

function StockDetail() {
    const { symbol } = useParams<{ symbol: string }>();

    const stockSymbol = symbol?.toUpperCase() || "";
    const exchange = "NSE";

    const [range, setRange] = useState<Range>("1m");
    const [prices, setPrices] = useState<PricePoint[]>([]);
    const [snapshot, setSnapshot] = useState<Snapshot | null>(null);
    const [marketStatus, setMarketStatus] = useState("CLOSED");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchStockData = async () => {
        try {
            setLoading(true);
            setError("");

            const [historyResponse, quoteResponse, statusResponse] =
                await Promise.all([
                    axios.get(
                        `${API_URL}/api/market/${stockSymbol}/history`,
                        {
                            params: {
                                exchange,
                                range,
                            },
                        }
                    ),

                    axios.post(
                        `${API_URL}/api/market/${stockSymbol}/quote`,
                        null,
                        {
                            params: {
                                exchange,
                            },
                        }
                    ),

                    axios.get(`${API_URL}/api/market/status`),
                ]);

            setPrices(historyResponse.data.prices || []);
            setSnapshot(quoteResponse.data.snapshot || null);
            setMarketStatus(statusResponse.data.status || "CLOSED");
        } catch (err) {
            console.error(err);
            setError("Unable to load market data for this symbol.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (stockSymbol) {
            fetchStockData();
        }
    }, [stockSymbol, range]);

    const chartData = useMemo(() => {
        return prices.map((point) => ({
            date: new Date(point.timestamp).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
            }),
            rawDate: point.timestamp,
            price: Number(point.price),
        }));
    }, [prices]);

    const currentPrice =
        snapshot?.price ??
        (prices.length > 0 ? prices[prices.length - 1].price : null);

    const firstPrice = prices.length > 0 ? prices[0].price : null;

    const change =
        currentPrice !== null && firstPrice !== null
            ? currentPrice - firstPrice
            : null;

    const changePercent =
        currentPrice !== null && firstPrice !== null && firstPrice !== 0
            ? (change! / firstPrice) * 100
            : null;

    const isPositive = (changePercent ?? 0) >= 0;

    // Period stats
    const periodStats = useMemo(() => {
        if (!prices.length) return { high: null, low: null };
        const nums = prices.map((p) => p.price);
        return {
            high: Math.max(...nums),
            low: Math.min(...nums),
        };
    }, [prices]);

    const strokeColor = isPositive ? "#10B981" : "#8B5CF6";
    const gradientId = isPositive ? "greenGradient" : "purpleGradient";

    return (
        <main className="stock-detail-page">
            {/* Top Navigation */}
            <div className="stock-detail-top-nav">
                <Link to="/watchlist" className="btn-back">
                    <span>←</span>
                    <span>Back to Watchlist</span>
                </Link>

                <div className="stock-market-chip">
                    <span
                        className="status-dot"
                        style={{
                            background:
                                marketStatus === "OPEN" ? "var(--positive)" : "var(--warning)",
                        }}
                    />
                    <span>
                        Market {marketStatus === "OPEN" ? "Open" : "Closed"}
                    </span>
                </div>
            </div>

            {/* Header Identity */}
            <div className="stock-detail-header-card">
                <div className="stock-detail-title-group">
                    <p className="eyebrow">EQUITY DETAILS</p>
                    <h1>
                        <span>{stockSymbol}</span>
                        <span className="stock-exchange-pill">{exchange}</span>
                    </h1>
                    <p className="stock-company-subtitle">
                        National Stock Exchange of India • Real-time tracking
                    </p>
                </div>
            </div>

            {/* Main Interactive Chart Card */}
            <section className="stock-chart-card">
                {loading ? (
                    <div style={{ padding: "60px 0", textAlign: "center" }}>
                        <div
                            className="skeleton skeleton-stock"
                            style={{ height: "120px", marginBottom: "24px" }}
                        />
                        <div
                            className="skeleton skeleton-stock"
                            style={{ height: "340px" }}
                        />
                    </div>
                ) : error ? (
                    <div className="error-screen" style={{ minHeight: "380px" }}>
                        <div className="error-icon">⚠️</div>
                        <h2>Unable to load stock details</h2>
                        <p>{error}</p>
                        <button
                            className="btn-primary"
                            style={{ marginTop: 16 }}
                            onClick={fetchStockData}
                        >
                            Try Again
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Price & Range Header */}
                        <div className="chart-header-row">
                            <div className="price-hero-section">
                                <span className="price-hero-label">Current Market Price</span>
                                <div className="price-hero-row">
                                    <span className="price-hero-val">
                                        {formatINR(currentPrice)}
                                    </span>
                                    {changePercent !== null && (
                                        <div
                                            className={`price-change-pill ${
                                                isPositive ? "positive" : "negative"
                                            }`}
                                        >
                                            <span>{isPositive ? "▲ +" : "▼ "}</span>
                                            <span>{Math.abs(changePercent).toFixed(2)}%</span>
                                            {change !== null && (
                                                <span style={{ opacity: 0.85, fontSize: "12px" }}>
                                                    ({isPositive ? "+" : ""}
                                                    {formatINR(change)})
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Range Selector */}
                            <div className="range-selector-bar">
                                {(
                                    ["1d", "1w", "1m", "3m", "6m", "1y"] as Range[]
                                ).map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => setRange(item)}
                                        className={`range-btn ${range === item ? "active" : ""}`}
                                    >
                                        {item.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Chart Stage */}
                        <div className="chart-stage">
                            {chartData.length > 0 ? (
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart
                                        data={chartData}
                                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                                    >
                                        <defs>
                                            <linearGradient
                                                id="greenGradient"
                                                x1="0"
                                                y1="0"
                                                x2="0"
                                                y2="1"
                                            >
                                                <stop
                                                    offset="5%"
                                                    stopColor="#10B981"
                                                    stopOpacity={0.4}
                                                />
                                                <stop
                                                    offset="95%"
                                                    stopColor="#10B981"
                                                    stopOpacity={0.0}
                                                />
                                            </linearGradient>
                                            <linearGradient
                                                id="purpleGradient"
                                                x1="0"
                                                y1="0"
                                                x2="0"
                                                y2="1"
                                            >
                                                <stop
                                                    offset="5%"
                                                    stopColor="#8B5CF6"
                                                    stopOpacity={0.4}
                                                />
                                                <stop
                                                    offset="95%"
                                                    stopColor="#8B5CF6"
                                                    stopOpacity={0.0}
                                                />
                                            </linearGradient>
                                        </defs>

                                        <CartesianGrid
                                            stroke="rgba(255, 255, 255, 0.05)"
                                            strokeDasharray="3 3"
                                            vertical={false}
                                        />

                                        <XAxis
                                            dataKey="date"
                                            tick={{
                                                fill: "#8E8EA0",
                                                fontSize: 11,
                                            }}
                                            tickLine={false}
                                            axisLine={{ stroke: "rgba(255,255,255,0.08)" }}
                                            minTickGap={24}
                                        />

                                        <YAxis
                                            domain={["auto", "auto"]}
                                            tick={{
                                                fill: "#8E8EA0",
                                                fontSize: 11,
                                            }}
                                            tickLine={false}
                                            axisLine={false}
                                            tickFormatter={(val) => `₹${val}`}
                                        />

                                        <Tooltip content={<CustomTooltip />} />

                                        <Area
                                            type="monotone"
                                            dataKey="price"
                                            stroke={strokeColor}
                                            strokeWidth={2.5}
                                            fill={`url(#${gradientId})`}
                                            activeDot={{
                                                r: 6,
                                                fill: strokeColor,
                                                stroke: "#07070D",
                                                strokeWidth: 3,
                                            }}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            ) : (
                                <div
                                    style={{
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "var(--text-muted)",
                                        fontSize: "14px",
                                    }}
                                >
                                    No historical data available for this range.
                                </div>
                            )}
                        </div>
                    </>
                )}
            </section>

            {/* Quick Stat Summary Cards */}
            <div className="stock-stats-grid">
                <div className="stock-stat-box">
                    <p className="stat-box-label">Period High</p>
                    <p className="stat-box-val" style={{ color: "var(--positive)" }}>
                        {formatINR(periodStats.high)}
                    </p>
                </div>

                <div className="stock-stat-box">
                    <p className="stat-box-label">Period Low</p>
                    <p className="stat-box-val" style={{ color: "var(--negative)" }}>
                        {formatINR(periodStats.low)}
                    </p>
                </div>

                <div className="stock-stat-box">
                    <p className="stat-box-label">Data Points</p>
                    <p className="stat-box-val">{prices.length} ticks</p>
                </div>

                <div className="stock-stat-box">
                    <p className="stat-box-label">Selected Range</p>
                    <p className="stat-box-val" style={{ color: "var(--purple-light)" }}>
                        {range.toUpperCase()}
                    </p>
                </div>
            </div>
        </main>
    );
}

export default StockDetail;