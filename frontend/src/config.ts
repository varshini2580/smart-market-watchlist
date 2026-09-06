export const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
export const API_URL = `${API_BASE}/api`;
/**
 * @deprecated Retained only for backward-compatibility fallback.
 * The application now uses authenticated user sessions from JWT / HttpOnly cookie.
 */
export const DEFAULT_USER_ID = "0ee8277d-2277-4371-b763-bd546ba74f65";