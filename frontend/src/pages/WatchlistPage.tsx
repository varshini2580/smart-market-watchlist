import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

import { API_URL as API } from "../config";

interface Stock {
    id: string;
    symbol: string;
    name: string;
    exchange: string;
}

interface WatchlistItem {
    id: string;
    watchlistId: string;
    stockId: string;
    intent: "HOLDING" | "INTERESTED";
    purchasePrice: number | null;
    targetPrice: number | null;
    stock: Stock;
    snapshot?: {
        price: number;
        changePercent: number;
        previousClose: number;
        fetchedAt: string;
    } | null;
}

interface Watchlist {
    id: string;
    name: string;
    items: WatchlistItem[];
}

type SortKey = "symbol" | "price" | "change" | "name";
type FilterKey = "all" | "holding" | "interested";

function formatINR(n: number | null | undefined) {
    if (n == null) return "—";
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(n);
}

function getTimeSince(iso: string) {
    try {
        return formatDistanceToNow(new Date(iso), { addSuffix: true });
    } catch {
        return "recently";
    }
}

export default function WatchlistPage() {
    const [watchlists, setWatchlists] = useState<Watchlist[]>([]);
    const [allStocks, setAllStocks] = useState<Stock[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<FilterKey>("all");
    const [sort, setSort] = useState<SortKey>("symbol");

    const [showAdd, setShowAdd] = useState(false);
    const [addStep, setAddStep] = useState<"select" | "configure">("select");
    const [addSearch, setAddSearch] = useState("");
    const [selectedStock, setSelectedStock] = useState<Stock | null>(null);
    const [intent, setIntent] = useState<"HOLDING" | "INTERESTED">("HOLDING");
    const [purchasePrice, setPurchasePrice] = useState("");
    const [targetPrice, setTargetPrice] = useState("");
    const [addError, setAddError] = useState("");
    const [adding, setAdding] = useState(false);

    const [removeItem, setRemoveItem] = useState<WatchlistItem | null>(null);
    const [removing, setRemoving] = useState(false);

    const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

    const showToast = (msg: string, type: "success" | "error" = "success") => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 3500);
    };

    const load = async () => {
        try {
            setLoading(true);
            setError(null);
            const [watchlistsRes, stocksRes, dashRes] = await Promise.all([
                axios.get(`${API}/watchlists`).catch(() => ({ data: { watchlists: [] } })),
                axios.get(`${API}/stocks`).catch(() => ({ data: { stocks: [] } })),
                axios.get(`${API}/dashboard`).catch(() => ({ data: { dashboard: null } })),
            ]);

            const rawWatchlists = Array.isArray(watchlistsRes.data?.watchlists)
                ? watchlistsRes.data.watchlists
                : [];
            const rawStocks: Stock[] = Array.isArray(stocksRes.data?.stocks)
                ? stocksRes.data.stocks
                : Array.isArray(stocksRes.data)
                ? stocksRes.data
                : [];
            const dashStocks = Array.isArray(dashRes.data?.dashboard?.stocks)
                ? dashRes.data.dashboard.stocks
                : [];

            const priceMap = new Map<string, any>();
            dashStocks.forEach((s: any) => {
                if (s.stockId) priceMap.set(s.stockId, s);
                if (s.watchlistItemId) priceMap.set(s.watchlistItemId, s);
                if (s.symbol) priceMap.set(s.symbol.toUpperCase(), s);
            });

            const enrichedWatchlists: Watchlist[] = rawWatchlists.map((w: any) => ({
                id: w.id,
                name: w.name,
                items: (w.items || []).map((item: any) => {
                    const priceInfo = priceMap.get(item.stockId) || priceMap.get(item.id) || priceMap.get(item.stock?.symbol?.toUpperCase());
                    const currentPrice = priceInfo?.currentPrice != null ? parseFloat(priceInfo.currentPrice) : null;
                    const purchasePrice = item.purchasePrice != null ? parseFloat(item.purchasePrice) : null;
                    const targetPrice = item.targetPrice != null ? parseFloat(item.targetPrice) : null;
                    let changePercent = 0;
                    if (currentPrice != null && purchasePrice != null && purchasePrice > 0) {
                        changePercent = ((currentPrice - purchasePrice) / purchasePrice) * 100;
                    }

                    return {
                        id: item.id,
                        watchlistId: item.watchlistId || w.id,
                        stockId: item.stockId,
                        intent: item.intent,
                        purchasePrice,
                        targetPrice,
                        stock: item.stock || {
                            id: item.stockId,
                            symbol: priceInfo?.symbol || "UNKNOWN",
                            name: priceInfo?.name || "Unknown Stock",
                            exchange: priceInfo?.exchange || "NSE",
                        },
                        snapshot: currentPrice != null ? {
                            price: currentPrice,
                            changePercent,
                            previousClose: purchasePrice || currentPrice,
                            fetchedAt: priceInfo?.fetchedAt || item.addedAt || new Date().toISOString(),
                        } : null,
                    };
                }),
            }));

            setWatchlists(enrichedWatchlists);
            setAllStocks(rawStocks);
        } catch {
            setError("Failed to load watchlist. Is the backend running?");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { load(); }, []);

    const allItems: WatchlistItem[] = useMemo(
        () => (watchlists || []).flatMap((w) => w.items || []),
        [watchlists]
    );

    const primaryWatchlist = watchlists[0] ?? null;

    const displayed = useMemo(() => {
        let items = [...allItems];
        if (filter === "holding") items = items.filter((i) => i.intent === "HOLDING");
        if (filter === "interested") items = items.filter((i) => i.intent === "INTERESTED");
        if (search.trim()) {
            const q = search.toLowerCase();
            items = items.filter(
                (i) =>
                    (i.stock?.symbol || "").toLowerCase().includes(q) ||
                    (i.stock?.name || "").toLowerCase().includes(q)
            );
        }
        items.sort((a, b) => {
            switch (sort) {
                case "price":
                    return (b.snapshot?.price ?? 0) - (a.snapshot?.price ?? 0);
                case "change":
                    return (b.snapshot?.changePercent ?? 0) - (a.snapshot?.changePercent ?? 0);
                case "name":
                    return (a.stock?.name || "").localeCompare(b.stock?.name || "");
                default:
                    return (a.stock?.symbol || "").localeCompare(b.stock?.symbol || "");
            }
        });
        return items;
    }, [allItems, filter, sort, search]);

    const addedIds = new Set(allItems.map((i) => i.stockId));

    const filteredAddStocks = (allStocks || []).filter((s) => {
        const q = addSearch.toLowerCase();
        return (
            (s.symbol || "").toLowerCase().includes(q) ||
            (s.name || "").toLowerCase().includes(q)
        );
    });

    const handleAdd = async () => {
        if (!selectedStock || !primaryWatchlist) return;
        const pp = purchasePrice ? parseFloat(purchasePrice) : undefined;
        const tp = targetPrice ? parseFloat(targetPrice) : undefined;
        if (purchasePrice && isNaN(pp!)) { setAddError("Invalid purchase price"); return; }
        if (targetPrice && isNaN(tp!)) { setAddError("Invalid target price"); return; }
        try {
            setAdding(true);
            setAddError("");
            await axios.post(`${API}/watchlists/${primaryWatchlist.id}/stocks`, {
                stockId: selectedStock.id,
                intent,
                purchasePrice: pp,
                targetPrice: tp,
            });
            setShowAdd(false);
            resetAdd();
            await load();
            showToast(`${selectedStock.symbol} added to watchlist`);
        } catch (e: unknown) {
            const msg = axios.isAxiosError(e)
                ? e.response?.data?.error ?? "Failed to add stock"
                : "Failed to add stock";
            setAddError(msg);
        } finally {
            setAdding(false);
        }
    };

    const handleRemove = async () => {
        if (!removeItem || !primaryWatchlist) return;
        try {
            setRemoving(true);
            await axios.delete(`${API}/watchlists/items/${removeItem.id}`);
            setRemoveItem(null);
            await load();
            showToast(`${removeItem.stock.symbol} removed`, "success");
        } catch {
            showToast("Failed to remove stock", "error");
        } finally {
            setRemoving(false);
        }
    };

    const resetAdd = () => {
        setAddStep("select");
        setAddSearch("");
        setSelectedStock(null);
        setIntent("HOLDING");
        setPurchasePrice("");
        setTargetPrice("");
        setAddError("");
    };

    if (loading) {
        return (
            <div className="page">
                <div className="page-topbar">
                    <div className="page-topbar-left">
                        <p className="eyebrow">WATCHLIST</p>
                        <h1 className="page-title">My Watchlist</h1>
                    </div>
                </div>
                <div className="page-body">
                    <div className="skeleton skeleton-hero" />
                    <div className="skeleton-grid">
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
                    <div className="error-icon">!</div>
                    <h2>Could not load watchlist</h2>
                    <p>{error}</p>
                    <button className="btn-primary" style={{ marginTop: 16 }} onClick={load}>
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="page">
            {toast && (
                <div className="toast-container">
                    <div className={`toast toast-${toast.type}`}>
                        <span className="toast-icon">{toast.type === "success" ? "✓" : "✕"}</span>
                        {toast.msg}
                    </div>
                </div>
            )}

            <div className="page-topbar">
                <div className="page-topbar-left">
                    <p className="eyebrow">PORTFOLIO TRACKING</p>
                    <h1 className="page-title">My Watchlist</h1>
                    <p className="page-subtitle">Track real-time valuations, purchase price deltas, and target goals</p>
                </div>
                <div className="page-topbar-right">
                    <button className="btn-primary" onClick={() => { resetAdd(); setShowAdd(true); }}>
                        + Add Stock
                    </button>
                </div>
            </div>

            <div className="page-body">
                <div className="filter-bar">
                    <div className="filter-tabs">
                        {(["all", "holding", "interested"] as FilterKey[]).map((f) => (
                            <button
                                key={f}
                                className={`filter-tab ${filter === f ? "active" : ""}`}
                                onClick={() => setFilter(f)}
                            >
                                {f === "all" ? `All (${allItems.length})` : f === "holding" ? "Holding" : "Interested"}
                            </button>
                        ))}
                    </div>
                    <select
                        className="sort-select"
                        value={sort}
                        onChange={(e) => setSort(e.target.value as SortKey)}
                    >
                        <option value="symbol">Sort: Symbol</option>
                        <option value="name">Sort: Name</option>
                        <option value="price">Sort: Price ↓</option>
                        <option value="change">Sort: Change %</option>
                    </select>
                </div>

                <div className="inline-search" style={{ marginBottom: 24 }}>
                    <span className="inline-search-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.3-4.3"/>
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="Search by symbol or company name…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {displayed.length === 0 ? (
                    <div className="empty">
                        <div className="empty-icon">{search ? "◈" : "☆"}</div>
                        <h3>{search ? "No results found" : "Your watchlist is empty"}</h3>
                        <p>
                            {search
                                ? `No stocks match "${search}"`
                                : "Add your first stock to start tracking."}
                        </p>
                        {!search && (
                            <button
                                className="btn-primary"
                                style={{ marginTop: 16 }}
                                onClick={() => { resetAdd(); setShowAdd(true); }}
                            >
                                + Add Stock
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="stock-grid">
                        {displayed.map((item, idx) => {
                            const snap = item.snapshot;
                            const pct = snap?.changePercent ?? 0;
                            const isPos = pct > 0;
                            const isNeg = pct < 0;

                            const gainLoss =
                                snap?.price != null && item.purchasePrice != null
                                    ? ((snap.price - item.purchasePrice) / item.purchasePrice) * 100
                                    : null;

                            return (
                                <div
                                    key={item.id}
                                    className="stock-card"
                                    style={{ animationDelay: `${idx * 0.04}s` }}
                                >
                                    <div className="stock-top">
                                        <div className="stock-identity">
                                            <div className="stock-symbol-row">
                                                <h3 className="stock-symbol">{item.stock.symbol}</h3>
                                                <span
                                                    className={`trend-badge ${isPos ? "trend-rising" : isNeg ? "trend-falling" : "trend-stable"}`}
                                                >
                                                    {isPos ? "▲" : isNeg ? "▼" : "—"}
                                                    {Math.abs(pct).toFixed(2)}%
                                                </span>
                                            </div>
                                            <p className="stock-name">{item.stock.name}</p>
                                            <span className="exchange">{item.stock.exchange}</span>
                                        </div>
                                        <button
                                            className="remove-btn"
                                            title="Remove from watchlist"
                                            onClick={() => setRemoveItem(item)}
                                        >
                                            ✕
                                        </button>
                                    </div>

                                    <div className="stock-price-block">
                                        <div className="price-main">
                                            <span className="price-label">Current Price</span>
                                            <span className="price-value">
                                                {snap?.price != null ? formatINR(snap.price) : "—"}
                                            </span>
                                        </div>
                                        <div className={`price-delta ${isPos ? "positive" : isNeg ? "negative" : "neutral"}`}>
                                            <span>{isPos ? "+" : ""}{pct.toFixed(2)}%</span>
                                            <span className="delta-label">vs prev close</span>
                                        </div>
                                    </div>

                                    <div className="stock-details">
                                        {item.purchasePrice != null && (
                                            <div className="stock-detail-item">
                                                <span className="detail-label">Purchase Price</span>
                                                <span className="detail-value">{formatINR(item.purchasePrice)}</span>
                                            </div>
                                        )}
                                        {gainLoss != null && (
                                            <div className="stock-detail-item">
                                                <span className="detail-label">Gain / Loss</span>
                                                <span className={`detail-value ${gainLoss >= 0 ? "text-success" : "text-danger"}`}>
                                                    {gainLoss >= 0 ? "+" : ""}{gainLoss.toFixed(2)}%
                                                </span>
                                            </div>
                                        )}
                                        {item.targetPrice != null && (
                                            <div className="stock-detail-item">
                                                <span className="detail-label">Target Price</span>
                                                <span className="detail-value">{formatINR(item.targetPrice)}</span>
                                            </div>
                                        )}
                                        <div className="stock-detail-item">
                                            <span className="detail-label">Intent</span>
                                            <span className={`intent-badge ${item.intent === "HOLDING" ? "intent-holding" : "intent-interested"}`}>
                                                {item.intent === "HOLDING" ? "Holding" : "Interested"}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="stock-footer">
                                        <span className="stock-updated">
                                            {snap?.fetchedAt ? `Updated ${getTimeSince(snap.fetchedAt)}` : "No data"}
                                        </span>
                                        <Link to={`/stocks/${item.stock.symbol}`} className="view-btn">
                                            View Chart →
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {showAdd && (
                <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) { setShowAdd(false); resetAdd(); } }}>
                    <div className="modal">
                        <div className="modal-header">
                            <h2>{addStep === "select" ? "Select a Stock" : "Configure Stock"}</h2>
                            <button className="close-btn" onClick={() => { setShowAdd(false); resetAdd(); }}>✕</button>
                        </div>

                        {addStep === "select" ? (
                            <>
                                <div className="search-box">
                                    <input
                                        type="text"
                                        placeholder="Search stocks…"
                                        value={addSearch}
                                        onChange={(e) => setAddSearch(e.target.value)}
                                        autoFocus
                                    />
                                </div>
                                <div className="stock-selection-list">
                                    {filteredAddStocks.length === 0 && (
                                        <div className="modal-empty">No stocks found</div>
                                    )}
                                    {filteredAddStocks.map((s) => {
                                        const added = addedIds.has(s.id);
                                        return (
                                            <button
                                                key={s.id}
                                                className={`stock-option ${added ? "stock-option-added" : ""}`}
                                                disabled={added}
                                                onClick={() => { setSelectedStock(s); setAddStep("configure"); }}
                                            >
                                                <div>
                                                    <strong>{s.symbol}</strong>
                                                    <span>{s.name} · {s.exchange}</span>
                                                </div>
                                                <div className="stock-option-right">
                                                    {added && <span className="already-added-badge">Added</span>}
                                                    {!added && <span style={{ color: "var(--purple-light)" }}>›</span>}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="selected-stock">
                                    <div>
                                        <span className="eyebrow">Selected</span>
                                        <h3>{selectedStock?.symbol}</h3>
                                        <p>{selectedStock?.name} · {selectedStock?.exchange}</p>
                                    </div>
                                    <button className="change-stock" onClick={() => setAddStep("select")}>
                                        Change
                                    </button>
                                </div>

                                <div className="form-group">
                                    <label>Intent <span className="required">*</span></label>
                                    <div className="intent-options">
                                        {(["HOLDING", "INTERESTED"] as const).map((opt) => (
                                            <button
                                                key={opt}
                                                className={`intent-option ${intent === opt ? "active" : ""}`}
                                                onClick={() => setIntent(opt)}
                                            >
                                                <strong>{opt === "HOLDING" ? "Holding" : "Interested"}</strong>
                                                <span>{opt === "HOLDING" ? "I own this stock" : "Watching for opportunity"}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Purchase Price <span className="optional">(optional)</span></label>
                                    <div className="input-with-prefix">
                                        <span className="input-prefix">₹</span>
                                        <input
                                            type="number"
                                            placeholder="e.g. 2450.00"
                                            value={purchasePrice}
                                            onChange={(e) => setPurchasePrice(e.target.value)}
                                            min="0"
                                            step="0.01"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Target Price <span className="optional">(optional)</span></label>
                                    <div className="input-with-prefix">
                                        <span className="input-prefix">₹</span>
                                        <input
                                            type="number"
                                            placeholder="e.g. 3000.00"
                                            value={targetPrice}
                                            onChange={(e) => setTargetPrice(e.target.value)}
                                            min="0"
                                            step="0.01"
                                        />
                                    </div>
                                </div>

                                {addError && <div className="form-error">{addError}</div>}

                                <button
                                    className="btn-primary btn-full"
                                    onClick={handleAdd}
                                    disabled={adding}
                                    style={{ margin: "0 22px 22px", width: "calc(100% - 44px)" }}
                                >
                                    {adding ? <span className="btn-spinner" /> : null}
                                    {adding ? "Adding…" : `Add ${selectedStock?.symbol} to Watchlist`}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}

            {removeItem && (
                <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setRemoveItem(null); }}>
                    <div className="modal modal-confirm">
                        <div className="confirm-icon">✕</div>
                        <h2>Remove Stock</h2>
                        <p className="confirm-desc">
                            Remove <strong>{removeItem.stock.symbol}</strong> ({removeItem.stock.name}) from your watchlist? This cannot be undone.
                        </p>
                        <div className="confirm-actions">
                            <button className="btn-ghost" onClick={() => setRemoveItem(null)}>Cancel</button>
                            <button className="btn-danger" onClick={handleRemove} disabled={removing}>
                                {removing ? <span className="btn-spinner" style={{ borderColor: "rgba(239,68,68,0.3)", borderTopColor: "var(--negative)" }} /> : null}
                                {removing ? "Removing…" : "Remove"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
