import React, { useState } from "react";
import {
    BrowserRouter,
    Navigate,
    NavLink,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";

import Dashboard from "./Dashboard";
import StockDetail from "./StockDetail";
import WatchlistPage from "./pages/WatchlistPage";
import MarketPage from "./pages/MarketPage";
import AlertsPage from "./pages/AlertsPage";
import NewsPage from "./pages/NewsPage";
import InsightsPage from "./pages/InsightsPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import { AuthProvider, useAuth } from "./context/AuthContext";
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
                        <div className="error-icon">!</div>
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

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="auth-viewport">
                <div className="auth-ambient-glow" />
                <div className="auth-card" style={{ textAlign: "center", padding: "48px 24px" }}>
                    <div className="auth-spinner" style={{ width: 36, height: 36, margin: "0 auto 16px" }} />
                    <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
                        Loading your workspace...
                    </p>
                </div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}

function AppLayout() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const closeSidebar = () => setSidebarOpen(false);

    const handleLogout = async () => {
        await logout();
        navigate("/login", { replace: true });
    };

    return (
        <div className="app-shell">
            <button
                className="sidebar-toggle"
                onClick={() => setSidebarOpen((o) => !o)}
                aria-label="Toggle navigation"
            >
                {sidebarOpen ? "✕" : "☰"}
            </button>

            <div
                className={`sidebar-overlay ${sidebarOpen ? "visible" : ""}`}
                onClick={closeSidebar}
            />

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
                        <span className="nav-icon">▲</span>
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
                    {user && (
                        <div className="sidebar-user-section">
                            <div className="sidebar-user-info">
                                <div className="sidebar-user-avatar">
                                    {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                                </div>
                                <div className="sidebar-user-meta">
                                    <span className="sidebar-user-name">{user.name}</span>
                                    <span className="sidebar-user-email">{user.email}</span>
                                </div>
                            </div>
                            <button
                                className="sidebar-logout-btn"
                                onClick={handleLogout}
                                title="Sign out"
                            >
                                Logout
                            </button>
                        </div>
                    )}

                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            `nav-item ${isActive ? "active" : ""}`
                        }
                        onClick={closeSidebar}
                    >
                        <span className="nav-icon">⊙</span>
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

            <div className="app-content">
                <RouteErrorBoundary>
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard" replace />} />
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/watchlist"
                            element={
                                <ProtectedRoute>
                                    <WatchlistPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/market"
                            element={
                                <ProtectedRoute>
                                    <MarketPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/alerts"
                            element={
                                <ProtectedRoute>
                                    <AlertsPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/news"
                            element={
                                <ProtectedRoute>
                                    <NewsPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/insights"
                            element={
                                <ProtectedRoute>
                                    <InsightsPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/settings"
                            element={
                                <ProtectedRoute>
                                    <SettingsPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/stocks/:symbol"
                            element={
                                <ProtectedRoute>
                                    <StockDetail />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="*" element={<Navigate to="/dashboard" replace />} />
                    </Routes>
                </RouteErrorBoundary>
            </div>
        </div>
    );
}

function AppRoutes() {
    const { user, loading } = useAuth();

    return (
        <Routes>
            <Route
                path="/login"
                element={
                    !loading && user ? (
                        <Navigate to="/dashboard" replace />
                    ) : (
                        <LoginPage />
                    )
                }
            />
            <Route
                path="/signup"
                element={
                    !loading && user ? (
                        <Navigate to="/dashboard" replace />
                    ) : (
                        <SignupPage />
                    )
                }
            />
            <Route path="/auth/callback" element={<AuthCallbackPage />} />
            <Route path="/*" element={<AppLayout />} />
        </Routes>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;