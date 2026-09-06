import { Router } from "express";
import {
  register,
  login,
  getMe,
  logout,
  googleAuth,
  googleCallback,
} from "../controllers/auth.controller";
import { requireAuth } from "../middleware/auth.middleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", requireAuth, getMe);
router.post("/logout", logout);

router.get("/google", googleAuth);
router.get("/google/callback", googleCallback);

export default router;
