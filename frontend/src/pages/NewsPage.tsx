import { useState, useEffect } from "react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

import { API_URL as API } from "../config";

interface Article {
    title: string;
    description: string;
    content: string;
    url: string;
    source: { name: string; url: string };
    publishedAt: string;
    image: string | null;
}

interface NewsResponse {
    available: boolean;
    articles: Article[];
    error?: string;
}

type Category = "general" | "business" | "technology" | "world";

const CATEGORIES: { key: Category; label: string; icon: string }[] = [
    { key: "general", label: "Market", icon: "📊" },
    { key: "business", label: "Business", icon: "💼" },
    { key: "technology", label: "Technology", icon: "💻" },
    { key: "world", label: "Global", icon: "🌐" },
];

function timeAgo(iso: string) {
    try { return formatDistanceToNow(new Date(iso), { addSuffix: true }); }
    catch { return "recently"; }
}

// Client-side cache so switching categories is instant with 0ms perceived lag
const newsClientCache = new Map<string, NewsResponse>();

export default function NewsPage() {
    const [data, setData] = useState<NewsResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [category, setCategory] = useState<Category>("general");
    const [search, setSearch] = useState("");

    const load = async (cat: Category) => {
        // Instant render from client cache
        if (newsClientCache.has(cat)) {
            setData(newsClientCache.get(cat)!);
            setLoading(false);
            return;
        }

        const queryMap: Record<Category, string> = {
            general: "India Stock Market Nifty",
            business: "Indian Economy Business Banking",
            technology: "Indian Tech Stocks IT TCS Infosys",
            world: "Global Markets Wall Street Nasdaq",
        };
        try {
            setLoading(true);
            setError(null);
            const res = await axios.get<NewsResponse>(`${API}/news`, {
                params: { category: cat, q: queryMap[cat] || "India Stock Market" },
                timeout: 7000,
            });
            setData(res.data);
            if (res.data?.articles && res.data.articles.length > 0) {
                newsClientCache.set(cat, res.data);
            }
        } catch {
            setError("Failed to fetch news.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { load(category); }, [category]);

    const filtered = (data?.articles ?? []).filter((a) => {
        if (!search.trim()) return true;
        const q = search.toLowerCase();
        return a.title.toLowerCase().includes(q) || a.description?.toLowerCase().includes(q);
    });

    return (
        <div className="page">
            <div className="page-topbar">
                <div className="page-topbar-left">
                    <p className="eyebrow">DISCOVER</p>
                    <h1 className="page-title">Market News</h1>
                    <p className="page-subtitle">Curated financial headlines and sector intelligence from real market sources</p>
                </div>
            </div>

            <div className="page-body">
                {/* Category tabs */}
                <div className="filter-bar">
                    <div className="filter-tabs">
                        {CATEGORIES.map((c) => (
                            <button
                                key={c.key}
                                className={`filter-tab ${category === c.key ? "active" : ""}`}
                                onClick={() => { setCategory(c.key); setSearch(""); }}
                            >
                                {c.icon} {c.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Search */}
                <div className="inline-search">
                    <span className="inline-search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search headlines…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Content */}
                {loading && (
                    <div className="news-grid">
                        {[0,1,2,3,4].map((i) => (
                            <div key={i} className="skeleton" style={{ height: 120, borderRadius: "var(--r-lg)", animationDelay: `${i * 0.1}s` }} />
                        ))}
                    </div>
                )}

                {!loading && error && (
                    <div className="error-screen" style={{ minHeight: "auto", padding: "40px 0" }}>
                        <div className="error-icon">⚠️</div>
                        <h2>Could not load news</h2>
                        <p>{error}</p>
                        <button className="btn-primary" style={{ marginTop: 16 }} onClick={() => load(category)}>Retry</button>
                    </div>
                )}

                {!loading && !error && data && !data.available && (
                    <NewsNotConfigured />
                )}

                {!loading && !error && data?.available && (
                    <>
                        {filtered.length === 0 ? (
                            <div className="empty">
                                <div className="empty-icon">🔍</div>
                                <h3>No articles found</h3>
                                <p>{search ? `No results for "${search}"` : "No articles in this category right now."}</p>
                            </div>
                        ) : (
                            <div className="news-grid">
                                {filtered.map((article, idx) => (
                                    <a
                                        key={`${article.url}-${idx}`}
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="news-card"
                                        style={{ animationDelay: `${idx * 0.05}s` }}
                                    >
                                        {article.image && (
                                            <div className="news-img-container">
                                                <img
                                                    src={article.image}
                                                    alt={article.title}
                                                    className="news-img"
                                                    onError={(e) => {
                                                        (e.currentTarget.parentElement as HTMLElement).style.display = "none";
                                                    }}
                                                />
                                            </div>
                                        )}
                                        <div className="news-card-header">
                                            <span className="news-source">{article.source.name}</span>
                                            <span className="news-published">{timeAgo(article.publishedAt)}</span>
                                        </div>
                                        <h3 className="news-headline">{article.title}</h3>
                                        {article.description && (
                                            <p className="news-summary">
                                                {article.description.length > 175
                                                    ? article.description.slice(0, 175) + "…"
                                                    : article.description}
                                            </p>
                                        )}
                                        <div className="news-card-footer">
                                            <span className="news-published">Source: {article.source.name}</span>
                                            <span className="news-ext-link">Read full story ↗</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}
                        <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 24, textAlign: "center" }}>
                            News sourced via backend proxy · API key managed server-side
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

function NewsNotConfigured() {
    return (
        <div className="empty" style={{ padding: "56px 32px" }}>
            <div className="empty-icon">📰</div>
            <h3>News feed not configured</h3>
            <p style={{ maxWidth: 420, lineHeight: 1.6 }}>
                To enable live financial news, add a GNews API key to your backend environment.
            </p>
            <div
                style={{
                    marginTop: 20,
                    background: "var(--surface-raised)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--r-md)",
                    padding: "16px 20px",
                    textAlign: "left",
                    maxWidth: 420,
                    width: "100%",
                }}
            >
                <p style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px" }}>
                    Setup Instructions
                </p>
                <ol style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                    <li>Get a free key at <a href="https://gnews.io" target="_blank" rel="noopener noreferrer" style={{ color: "var(--purple-light)" }}>gnews.io</a></li>
                    <li>Add <code style={{ background: "var(--surface-high)", padding: "1px 6px", borderRadius: 4, color: "var(--text)", fontSize: 12 }}>NEWS_API_KEY=your_key</code> to <code style={{ background: "var(--surface-high)", padding: "1px 6px", borderRadius: 4, color: "var(--text)", fontSize: 12 }}>backend/.env</code></li>
                    <li>Restart the backend server</li>
                </ol>
            </div>
        </div>
    );
}
