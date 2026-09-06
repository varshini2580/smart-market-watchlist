import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { API_URL } from "../config";

export interface User {
  id: string;
  name: string;
  email: string;
  authProvider?: string;
  createdAt?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Ensure axios sends cookies with every request
axios.defaults.withCredentials = true;

// Key for fallback token storage (ensures cross-domain session persistence on Safari/Render)
const TOKEN_STORAGE_KEY = "smw_auth_token";

// Attach Bearer token to all outgoing requests if available
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (token && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    try {
      const res = await axios.get(`${API_URL}/auth/me`);
      if (res.data?.success && res.data.user) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
      localStorage.removeItem(TOKEN_STORAGE_KEY);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // Handle 401 Unauthorized globally
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401 && !error.config?.url?.includes("/auth/login")) {
          // Avoid triggering on failed login attempts
          if (user) {
            setUser(null);
            localStorage.removeItem(TOKEN_STORAGE_KEY);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [user]);

  const login = async (email: string, password: string, rememberMe: boolean = false) => {
    const res = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
      rememberMe,
    });

    if (res.data?.success) {
      if (res.data.token) {
        localStorage.setItem(TOKEN_STORAGE_KEY, res.data.token);
      }
      setUser(res.data.user);
    } else {
      throw new Error(res.data?.message || "Login failed");
    }
  };

  const register = async (name: string, email: string, password: string) => {
    const res = await axios.post(`${API_URL}/auth/register`, {
      name,
      email,
      password,
    });

    if (res.data?.success) {
      if (res.data.token) {
        localStorage.setItem(TOKEN_STORAGE_KEY, res.data.token);
      }
      setUser(res.data.user);
    } else {
      throw new Error(res.data?.message || "Registration failed");
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${API_URL}/auth/logout`);
    } catch {
      // Continue even if network error
    } finally {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
