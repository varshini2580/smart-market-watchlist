import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AuthCallbackPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { checkAuth } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    const error = params.get("error");

    if (error) {
      navigate(`/login?error=${encodeURIComponent(error)}`, { replace: true });
      return;
    }

    if (token) {
      localStorage.setItem("smw_auth_token", token);
      checkAuth().then(() => {
        navigate("/dashboard", { replace: true });
      });
    } else {
      checkAuth().then(() => {
        navigate("/dashboard", { replace: true });
      }).catch(() => {
        navigate("/login", { replace: true });
      });
    }
  }, [location.search, navigate, checkAuth]);

  return (
    <div className="auth-viewport">
      <div className="auth-card" style={{ textAlign: "center", padding: "40px 24px" }}>
        <div className="auth-spinner" style={{ width: 36, height: 36, margin: "0 auto 20px" }} />
        <h2 style={{ fontSize: 18, color: "var(--text)" }}>Authenticating...</h2>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 8 }}>
          Finalizing your secure session with Smart Market Watchlist.
        </p>
      </div>
    </div>
  );
}
