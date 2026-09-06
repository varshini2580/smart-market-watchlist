import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const STORAGE_KEY = "smw-settings";

interface Settings {
    animationsEnabled: boolean;
    defaultFilter: "all" | "holding" | "interested";
    defaultSort: "symbol" | "price" | "change";
    density: "comfortable" | "compact";
}

const DEFAULT_SETTINGS: Settings = {
    animationsEnabled: true,
    defaultFilter: "all",
    defaultSort: "symbol",
    density: "comfortable",
};

function loadSettings(): Settings {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
    } catch {}
    return { ...DEFAULT_SETTINGS };
}

function saveSettings(s: Settings) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

export default function SettingsPage() {
    const { user, logout } = useAuth();
    const [settings, setSettings] = useState<Settings>(loadSettings);
    const [saved, setSaved] = useState(false);

    const update = <K extends keyof Settings>(key: K, value: Settings[K]) => {
        const next = { ...settings, [key]: value };
        setSettings(next);
        saveSettings(next);
        setSaved(true);
        setTimeout(() => setSaved(false), 1800);
    };

    useEffect(() => {
        if (!settings.animationsEnabled) {
            document.documentElement.style.setProperty("--t-base", "0ms");
            document.documentElement.style.setProperty("--t-fast", "0ms");
            document.documentElement.style.setProperty("--t-slow", "0ms");
        } else {
            document.documentElement.style.removeProperty("--t-base");
            document.documentElement.style.removeProperty("--t-fast");
            document.documentElement.style.removeProperty("--t-slow");
        }
    }, [settings.animationsEnabled]);

    return (
        <div className="page">
            <div className="page-topbar">
                <div className="page-topbar-left">
                    <p className="eyebrow">PREFERENCES</p>
                    <h1 className="page-title">Settings</h1>
                    <p className="page-subtitle">Configure interface presets, layout density, and animation behavior</p>
                </div>
                {saved && (
                    <div className="page-topbar-right">
                        <span style={{
                            fontSize: 12, fontWeight: 600,
                            color: "var(--positive)",
                            background: "var(--positive-dim)",
                            border: "1px solid var(--positive-border)",
                            padding: "4px 12px",
                            borderRadius: 999,
                        }}>
                            ✓ Saved
                        </span>
                    </div>
                )}
            </div>

            <div className="page-body">
                <div className="settings-grid">
                    {user && (
                        <div className="settings-section" style={{ animationDelay: "0.02s" }}>
                            <div className="settings-section-header">
                                <h3>Account & Session</h3>
                                <p>Authenticated user profile and credentials</p>
                            </div>
                            <div className="settings-row">
                                <div className="settings-row-label">
                                    <strong>Name</strong>
                                    <span>Your display name</span>
                                </div>
                                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>
                                    {user.name}
                                </span>
                            </div>
                            <div className="settings-row">
                                <div className="settings-row-label">
                                    <strong>Email</strong>
                                    <span>Connected account address</span>
                                </div>
                                <span style={{ fontSize: 13, color: "var(--text-secondary)", fontFamily: "var(--font-mono, monospace)" }}>
                                    {user.email}
                                </span>
                            </div>
                            <div className="settings-row">
                                <div className="settings-row-label">
                                    <strong>Authentication Method</strong>
                                    <span>How you signed into Smart Market Watchlist</span>
                                </div>
                                <span
                                    style={{
                                        fontSize: 12, fontWeight: 700,
                                        color: user.authProvider === "google" ? "#4285F4" : "var(--purple-light)",
                                        background: user.authProvider === "google" ? "rgba(66, 133, 244, 0.1)" : "var(--purple-dim)",
                                        border: user.authProvider === "google" ? "1px solid rgba(66, 133, 244, 0.25)" : "1px solid var(--purple-border)",
                                        padding: "4px 10px",
                                        borderRadius: 999,
                                        textTransform: "capitalize",
                                    }}
                                >
                                    {user.authProvider === "google" ? "Google OAuth" : "Email & Password"}
                                </span>
                            </div>
                            <div className="settings-row">
                                <div className="settings-row-label">
                                    <strong>Session Management</strong>
                                    <span>Terminate this session and return to login</span>
                                </div>
                                <button
                                    className="btn-danger"
                                    onClick={logout}
                                    style={{
                                        fontSize: 12,
                                        padding: "6px 14px",
                                        background: "rgba(239, 68, 68, 0.12)",
                                        color: "var(--negative)",
                                        border: "1px solid rgba(239, 68, 68, 0.25)",
                                        borderRadius: 8,
                                        cursor: "pointer",
                                        fontWeight: 600,
                                    }}
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="settings-section" style={{ animationDelay: "0.04s" }}>
                        <div className="settings-section-header">
                            <h3>Appearance</h3>
                            <p>Visual theme and display preferences</p>
                        </div>
                        <div className="settings-row">
                            <div className="settings-row-label">
                                <strong>Theme</strong>
                                <span>Dark mode is always active for the best trading experience</span>
                            </div>
                            <span
                                style={{
                                    fontSize: 12, fontWeight: 700,
                                    color: "var(--purple-light)",
                                    background: "var(--purple-dim)",
                                    border: "1px solid var(--purple-border)",
                                    padding: "4px 10px",
                                    borderRadius: 999,
                                }}
                            >
                                Dark — Always on
                            </span>
                        </div>
                        <div className="settings-row">
                            <div className="settings-row-label">
                                <strong>Card Density</strong>
                                <span>Amount of information shown per card</span>
                            </div>
                            <select
                                className="settings-select"
                                value={settings.density}
                                onChange={(e) => update("density", e.target.value as Settings["density"])}
                            >
                                <option value="comfortable">Comfortable</option>
                                <option value="compact">Compact</option>
                            </select>
                        </div>
                    </div>

                    <div className="settings-section" style={{ animationDelay: "0.08s" }}>
                        <div className="settings-section-header">
                            <h3>Animations</h3>
                            <p>Motion and transition preferences</p>
                        </div>
                        <div className="settings-row">
                            <div className="settings-row-label">
                                <strong>Enable Animations</strong>
                                <span>Fade-in, slide-up, and hover transitions</span>
                            </div>
                            <label className="toggle">
                                <input
                                    type="checkbox"
                                    checked={settings.animationsEnabled}
                                    onChange={(e) => update("animationsEnabled", e.target.checked)}
                                />
                                <span className="toggle-track" />
                                <span className="toggle-thumb" />
                            </label>
                        </div>
                    </div>

                    <div className="settings-section" style={{ animationDelay: "0.12s" }}>
                        <div className="settings-section-header">
                            <h3>Watchlist Defaults</h3>
                            <p>Default view options when opening your watchlist</p>
                        </div>
                        <div className="settings-row">
                            <div className="settings-row-label">
                                <strong>Default Filter</strong>
                                <span>Which stocks to show by default</span>
                            </div>
                            <select
                                className="settings-select"
                                value={settings.defaultFilter}
                                onChange={(e) => update("defaultFilter", e.target.value as Settings["defaultFilter"])}
                            >
                                <option value="all">All Stocks</option>
                                <option value="holding">Holding Only</option>
                                <option value="interested">Interested Only</option>
                            </select>
                        </div>
                        <div className="settings-row">
                            <div className="settings-row-label">
                                <strong>Default Sort</strong>
                                <span>How stocks are ordered by default</span>
                            </div>
                            <select
                                className="settings-select"
                                value={settings.defaultSort}
                                onChange={(e) => update("defaultSort", e.target.value as Settings["defaultSort"])}
                            >
                                <option value="symbol">By Symbol (A–Z)</option>
                                <option value="price">By Price (High–Low)</option>
                                <option value="change">By Change %</option>
                            </select>
                        </div>
                    </div>

                    <div className="settings-section" style={{ animationDelay: "0.16s" }}>
                        <div className="settings-section-header">
                            <h3>About</h3>
                            <p>Application information</p>
                        </div>
                        {[
                            { label: "Application", value: "Smart Market Watchlist" },
                            { label: "Version", value: "1.0.0" },
                            { label: "Frontend", value: "React 19 + Vite + TypeScript" },
                            { label: "Backend", value: "Express + Prisma + TypeScript" },
                            { label: "Market Data", value: "Yahoo Finance (real-time)" },
                            { label: "Charts", value: "Recharts" },
                        ].map((row) => (
                            <div key={row.label} className="settings-row">
                                <div className="settings-row-label">
                                    <strong>{row.label}</strong>
                                </div>
                                <span style={{ fontSize: 13, color: "var(--text-secondary)", fontFamily: "var(--font-mono, monospace)" }}>
                                    {row.value}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="settings-section" style={{ animationDelay: "0.20s" }}>
                        <div className="settings-section-header">
                            <h3>Reset</h3>
                            <p>Restore default preferences</p>
                        </div>
                        <div className="settings-row">
                            <div className="settings-row-label">
                                <strong>Reset All Settings</strong>
                                <span>Restore all preferences to their defaults</span>
                            </div>
                            <button
                                className="btn-ghost"
                                onClick={() => {
                                    setSettings({ ...DEFAULT_SETTINGS });
                                    saveSettings({ ...DEFAULT_SETTINGS });
                                    setSaved(true);
                                    setTimeout(() => setSaved(false), 1800);
                                }}
                                style={{ fontSize: 12 }}
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
