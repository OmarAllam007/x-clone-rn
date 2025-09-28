import express from "express";
import {followUser, getCurrentUser, getUserProfile, syncUser, updateProfile} from "../controllers/user.controller.js";
import {authMiddleware} from "../middleware/auth.middleware.js";


const router = express.Router();

//guest
router.get("/profile/:username",getUserProfile);

//auth
router.post("/sync",authMiddleware, syncUser);
router.post("/me",authMiddleware, getCurrentUser)
router.put("/profile",authMiddleware,updateProfile)
router.post("/follow/:targetUserId",authMiddleware, followUser)


export default router;
