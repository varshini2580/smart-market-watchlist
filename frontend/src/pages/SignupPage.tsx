import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { API_URL } from "../config";

export default function SignupPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const queryParams = new URLSearchParams(location.search);
  const urlError = queryParams.get("error");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await register(name, email, password);
      navigate("/dashboard", { replace: true });
    } catch (err: unknown) {
      const msg =
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message ||
        (err instanceof Error ? err.message : "Failed to create account. Please try again.");
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    window.location.href = `${API_URL}/auth/google`;
  };

  return (
    <div className="auth-viewport">
      <div className="auth-ambient-glow" />

      <div className="auth-card">
        {/* Brand Header */}
        <div className="auth-brand-header">
          <div className="auth-brand-mark">◈</div>
          <h1 className="auth-title">SMART MARKET WATCHLIST</h1>
          <p className="auth-subtitle">
            Create your account to start tracking what matters.
          </p>
        </div>

        {/* Error Notification */}
        {(error || urlError) && (
          <div className="auth-error-banner" role="alert">
            <span className="auth-error-icon">⚠️</span>
            <span>{error || urlError}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          <div className="auth-field">
            <label htmlFor="signup-name" className="auth-label">
              Full Name
            </label>
            <div className="auth-input-wrapper">
              <input
                id="signup-name"
                type="text"
                className="auth-input"
                placeholder="e.g. Varsha M"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
                disabled={loading}
              />
              <span className="auth-input-icon">👤</span>
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="signup-email" className="auth-label">
              Email Address
            </label>
            <div className="auth-input-wrapper">
              <input
                id="signup-email"
                type="email"
                className="auth-input"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                disabled={loading}
              />
              <span className="auth-input-icon">✉</span>
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="signup-password" className="auth-label">
              Password
            </label>
            <div className="auth-input-wrapper">
              <input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                className="auth-input"
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                required
                disabled={loading}
              />
              <button
                type="button"
                className="auth-eye-btn"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "👁" : "👁‍🗨"}
              </button>
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="signup-confirm" className="auth-label">
              Confirm Password
            </label>
            <div className="auth-input-wrapper">
              <input
                id="signup-confirm"
                type={showPassword ? "text" : "password"}
                className="auth-input"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
                required
                disabled={loading}
              />
            </div>
          </div>

          <button
            type="submit"
            className="auth-submit-btn"
            disabled={loading}
          >
            {loading ? (
              <span className="auth-spinner-wrapper">
                <span className="auth-spinner" />
                Creating account...
              </span>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="auth-divider">
          <span>OR</span>
        </div>

        {/* Google Signup Button */}
        <button
          type="button"
          className="auth-google-btn"
          onClick={handleGoogleSignup}
          disabled={loading}
        >
          <svg className="auth-google-icon" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* Footer Link */}
        <div className="auth-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="auth-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
