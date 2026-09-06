import { Request, Response } from "express";
import { authService } from "../services/auth.service";
import { AuthRequest } from "../middleware/auth.middleware";

const isProduction = process.env.NODE_ENV === "production";

const getCookieOptions = (rememberMe: boolean = false) => {
  const maxAge = rememberMe
    ? 30 * 24 * 60 * 60 * 1000 // 30 days
    : 24 * 60 * 60 * 1000; // 24 hours

  return {
    httpOnly: true,
    secure: isProduction,
    sameSite: (isProduction ? "none" : "lax") as "none" | "lax",
    maxAge,
    path: "/",
  };
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const result = await authService.register(name, email, password);

    res.cookie("token", result.token, getCookieOptions(false));

    return res.status(201).json({
      success: true,
      message: "Account created successfully",
      user: result.user,
      token: result.token,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Registration failed",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password, rememberMe } = req.body;

    const result = await authService.login(email, password, !!rememberMe);

    res.cookie("token", result.token, getCookieOptions(!!rememberMe));

    return res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: result.user,
      token: result.token,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Invalid email or password",
    });
  }
};

export const getMe = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated",
      });
    }

    const user = await authService.getUserById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User account not found",
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve user profile",
    });
  }
};

export const logout = async (_req: Request, res: Response) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: isProduction,
      sameSite: (isProduction ? "none" : "lax") as "none" | "lax",
      path: "/",
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to log out",
    });
  }
};

export const googleAuth = async (_req: Request, res: Response) => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const callbackUrl =
    process.env.GOOGLE_CALLBACK_URL ||
    "http://localhost:5000/api/auth/google/callback";

  const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
  if (!clientId || clientId.trim() === "" || clientId === "your_google_client_id_here") {
    const errorMsg = encodeURIComponent(
      "Google Sign-In is not configured yet on this server. Please use Email & Password to sign in or register, or set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in backend/.env."
    );
    return res.redirect(`${frontendUrl}/login?error=${errorMsg}`);
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: callbackUrl,
    response_type: "code",
    scope: "openid email profile",
    prompt: "select_account",
    access_type: "offline",
  });

  return res.redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
  );
};

export const googleCallback = async (req: Request, res: Response) => {
  const code = req.query.code as string;
  const error = req.query.error as string;
  const frontendUrl =
    process.env.FRONTEND_URL || "http://localhost:5173";

  if (error || !code) {
    return res.redirect(
      `${frontendUrl}/login?error=${encodeURIComponent(
        error || "Google authentication was cancelled"
      )}`
    );
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const callbackUrl =
    process.env.GOOGLE_CALLBACK_URL ||
    "http://localhost:5000/api/auth/google/callback";

  if (!clientId || !clientSecret) {
    return res.redirect(
      `${frontendUrl}/login?error=${encodeURIComponent(
        "Google OAuth credentials missing on backend."
      )}`
    );
  }

  try {
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: callbackUrl,
        grant_type: "authorization_code",
      }),
    });

    if (!tokenResponse.ok) {
      const errText = await tokenResponse.text();
      console.error("Google token exchange error:", errText);
      return res.redirect(
        `${frontendUrl}/login?error=${encodeURIComponent(
          "Failed to exchange Google authorization code"
        )}`
      );
    }

    const tokenData = (await tokenResponse.json()) as {
      access_token: string;
      id_token: string;
    };

    const userinfoResponse = await fetch(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
      }
    );

    if (!userinfoResponse.ok) {
      return res.redirect(
        `${frontendUrl}/login?error=${encodeURIComponent(
          "Failed to retrieve user profile from Google"
        )}`
      );
    }

    const profile = (await userinfoResponse.json()) as {
      sub: string;
      email: string;
      name: string;
      picture?: string;
    };

    const result = await authService.handleGoogleUser({
      sub: profile.sub,
      email: profile.email,
      name: profile.name || profile.email.split("@")[0],
    });

    res.cookie("token", result.token, getCookieOptions(true));

    return res.redirect(
      `${frontendUrl}/auth/callback?token=${result.token}`
    );
  } catch (err) {
    console.error("Google callback error:", err);
    return res.redirect(
      `${frontendUrl}/login?error=${encodeURIComponent(
        "An unexpected error occurred during Google authentication"
      )}`
    );
  }
};
