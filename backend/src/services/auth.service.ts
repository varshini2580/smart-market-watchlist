import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma";


const JWT_SECRET =
  process.env.JWT_SECRET || "smw-jwt-secret-dev-key-change-in-production";

export interface TokenPayload {
  id: string;
  email: string;
  name: string;
}

export const authService = {
  /**
   * Generates a signed JWT for the user.
   * If rememberMe is true, session duration is 30 days; otherwise 1 day.
   */
  generateToken(user: TokenPayload, rememberMe: boolean = false): string {
    const expiresIn = rememberMe ? "30d" : "1d";
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      JWT_SECRET,
      { expiresIn }
    );
  },

  /**
   * Registers a new user with name, email, and password.
   * Creates an empty default "My Watchlist" — the user must add stocks manually.
   */
  async register(name: string, email: string, password: string) {
    const cleanName = name?.trim();
    const cleanEmail = email?.toLowerCase().trim();

    if (!cleanName || cleanName.length < 2) {
      throw new Error("Name must be at least 2 characters long");
    }

    if (!cleanEmail || !cleanEmail.includes("@") || !cleanEmail.includes(".")) {
      throw new Error("Please enter a valid email address");
    }

    if (!password || password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }

    // Check if user already exists
    const existing = await prisma.user.findUnique({
      where: { email: cleanEmail },
    });

    if (existing) {
      throw new Error("An account with this email already exists");
    }

    // Hash password with bcrypt
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        name: cleanName,
        email: cleanEmail,
        passwordHash,
        authProvider: "local",
      },
    });

    // Create an empty default watchlist — user adds their own stocks
    await prisma.watchlist.create({
      data: {
        userId: user.id,
        name: "My Watchlist",
      },
    });

    const token = this.generateToken(
      { id: user.id, email: user.email, name: user.name },
      false
    );

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        authProvider: user.authProvider,
        createdAt: user.createdAt,
      },
      token,
    };
  },

  /**
   * Authenticates user via email + password.
   * Supports 'rememberMe' to adjust session length.
   */
  async login(email: string, password: string, rememberMe: boolean = false) {
    const cleanEmail = email?.toLowerCase().trim();

    if (!cleanEmail || !password) {
      throw new Error("Email and password are required");
    }

    const user = await prisma.user.findUnique({
      where: { email: cleanEmail },
    });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    if (!user.passwordHash) {
      // User registered via Google OAuth without password
      throw new Error(
        "This account was registered using Google. Please continue with Google."
      );
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      throw new Error("Invalid email or password");
    }

    const token = this.generateToken(
      { id: user.id, email: user.email, name: user.name },
      rememberMe
    );

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        authProvider: user.authProvider,
        createdAt: user.createdAt,
      },
      token,
    };
  },

  /**
   * Retrieves sanitized user details by ID.
   */
  async getUserById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        authProvider: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return user;
  },

  /**
   * Finds or creates a user from verified Google OAuth credentials.
   * Links to existing account if email matches.
   */
  async handleGoogleUser(profile: {
    sub: string;
    email: string;
    name: string;
  }) {
    const cleanEmail = profile.email.toLowerCase().trim();

    // 1. Find by googleId or email
    let user = await prisma.user.findFirst({
      where: {
        OR: [{ googleId: profile.sub }, { email: cleanEmail }],
      },
    });

    if (user) {
      // If user exists without googleId, link it
      if (!user.googleId) {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { googleId: profile.sub },
        });
      }
    } else {
      // Create new user
      user = await prisma.user.create({
        data: {
          name: profile.name || cleanEmail.split("@")[0],
          email: cleanEmail,
          googleId: profile.sub,
          authProvider: "google",
        },
      });

      // Create an empty default watchlist — user adds their own stocks
      await prisma.watchlist.create({
        data: {
          userId: user.id,
          name: "My Watchlist",
        },
      });
    }

    const token = this.generateToken(
      { id: user.id, email: user.email, name: user.name },
      true // Google login persists 30 days
    );

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        authProvider: user.authProvider,
        createdAt: user.createdAt,
      },
      token,
    };
  },
};
