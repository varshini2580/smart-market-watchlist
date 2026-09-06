import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export interface AuthRequest extends Request {
  user?: AuthUser;
}

const JWT_SECRET =
  process.env.JWT_SECRET || "smw-jwt-secret-dev-key-change-in-production";

/**
 * Authentication middleware that verifies JWT token from:
 * 1. HttpOnly Cookie ('token')
 * 2. Authorization Header ('Bearer <token>')
 *
 * Populates req.user if valid. Returns 401 Unauthorized otherwise.
 */
export const requireAuth = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    let token: string | undefined;

    // 1. Check HttpOnly cookie
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }

    // 2. Check Authorization header (Bearer token fallback for cross-domain / mobile)
    if (!token && req.headers.authorization) {
      const parts = req.headers.authorization.split(" ");
      if (parts.length === 2 && parts[0] === "Bearer") {
        token = parts[1];
      }
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required. Please log in.",
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as AuthUser;
    req.user = {
      id: decoded.id,
      email: decoded.email,
      name: decoded.name,
    };

    return next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Session expired or invalid. Please log in again.",
    });
  }
};

/**
 * Optional authentication middleware:
 * Populates req.user if valid token exists, but does NOT reject if missing.
 */
export const optionalAuth = (
  req: AuthRequest,
  _res: Response,
  next: NextFunction
) => {
  try {
    let token: string | undefined;

    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    } else if (req.headers.authorization) {
      const parts = req.headers.authorization.split(" ");
      if (parts.length === 2 && parts[0] === "Bearer") {
        token = parts[1];
      }
    }

    if (token) {
      const decoded = jwt.verify(token, JWT_SECRET) as AuthUser;
      req.user = {
        id: decoded.id,
        email: decoded.email,
        name: decoded.name,
      };
    }
  } catch {
    // Non-fatal for optional auth
  }

  return next();
};
