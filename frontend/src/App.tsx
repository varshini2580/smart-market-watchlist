import React, { useState } from "react";
import {
    BrowserRouter,
    Navigate,
    NavLink,
    Route,
    Routes,
} from "react-router-dom";

import Dashboard from "./Dashboard";
import StockDetail from "./StockDetail";
import WatchlistPage from "./pages/WatchlistPage";
import MarketPage from "./pages/MarketPage";
import AlertsPage from "./pages/AlertsPage";
import NewsPage from "./pages/NewsPage";
import InsightsPage from "./pages/InsightsPage";
import SettingsPage from "./pages/SettingsPage";
import "./App.css";

class RouteErrorBoundary extends React.Component<
    { children: React.ReactNode },
    { hasError: boolean; error: Error | null }
> {
    constructor(props: { children: React.ReactNode }) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Route error boundary caught:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-screen" style={{ minHeight: "60vh" }}>
                    <div className="error-card">
                        <div className="error-icon">⚠️</div>
                        <h2>Page Error</h2>
                        <p>An unexpected error occurred while loading this view.</p>
                        <button
                            className="btn-primary"
                            style={{ marginTop: 16 }}
                            onClick={() => {
                                this.setState({ hasError: false, error: null });
                                window.location.reload();
                            }}
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

function AppLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const closeSidebar = () => setSidebarOpen(false);

    return (
        <div className="app-shell">
            {/* Mobile toggle */}
            <button
                className="sidebar-toggle"
                onClick={() => setSidebarOpen((o) => !o)}
                aria-label="Toggle navigation"
            >
                {sidebarOpen ? "✕" : "☰"}
            </button>

            {/* Overlay (mobile) */}
            <div
                className={`sidebar-overlay ${sidebarOpen ? "visible" : ""}`}
                onClick={closeSidebar}
            />

            {/* Sidebar */}
            <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                <div className="sidebar-brand">
                    <div className="brand-mark">◈</div>
                    <div>
                        <strong>Smart Market</strong>
                        <span>Watchlist Pro</span>
                    </div>
                </div>

                <nav className="sidebar-nav" onClick={closeSidebar}>
                    <p className="nav-label">WORKSPACE</p>

                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `nav-item ${isActive ? "active" : ""}`
                        }
                    >
                        <span className="nav-icon">⌂</span>
                        <span>Dashboard</span>
                    </NavLink>

                    <NavLink
                        to="/watchlist"
                        className={({ isActive }) =>
                            `nav-item ${isActive ? "active" : ""}`
                        }
                    >
                        <span className="nav-icon">☆</span>
                        <span>My Watchlist</span>
                    </NavLink>

                    <NavLink
                        to="/market"
                        className={({ isActive }) =>
                            `nav-item ${isActive ? "active" : ""}`
                        }
                    >
                        <span className="nav-icon">◒</span>
                        <span>Market</span>
                    </NavLink>

                    <NavLink
                        to="/alerts"
                        className={({ isActive }) =>
                            `nav-item ${isActive ? "active" : ""}`
                        }
                    >
                        <span className="nav-icon">⚡</span>
                        <span>Alerts</span>
                    </NavLink>

                    <p className="nav-label nav-label-secondary">DISCOVER</p>

                    <NavLink
                        to="/news"
                        className={({ isActive }) =>
                            `nav-item ${isActive ? "active" : ""}`
                        }
                    >
                        <span className="nav-icon">◫</span>
                        <span>News</span>
                    </NavLink>

                    <NavLink
                        to="/insights"
                        className={({ isActive }) =>
                            `nav-item ${isActive ? "active" : ""}`
                        }
                    >
                        <span className="nav-icon">✦</span>
                        <span>Insights</span>
                    </NavLink>
                </nav>

                <div className="sidebar-bottom">
                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            `nav-item ${isActive ? "active" : ""}`
                        }
                        onClick={closeSidebar}
                    >
                        <span className="nav-icon">⚙</span>
                        <span>Settings</span>
                    </NavLink>

                    <div className="sidebar-status">
                        <span className="status-dot" />
                        <div>
                            <strong>Market data</strong>
                            <span>Connected</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main content */}
            <div className="app-content">
                <RouteErrorBoundary>
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard" replace />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/watchlist" element={<WatchlistPage />} />
                        <Route path="/market" element={<MarketPage />} />
                        <Route path="/alerts" element={<AlertsPage />} />
                        <Route path="/news" element={<NewsPage />} />
                        <Route path="/insights" element={<InsightsPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                        <Route path="/stocks/:symbol" element={<StockDetail />} />
                        <Route path="*" element={<Navigate to="/dashboard" replace />} />
                    </Routes>
                </RouteErrorBoundary>
            </div>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppLayout />
        </BrowserRouter>
    );
}

export default App;