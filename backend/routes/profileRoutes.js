import express from "express";
import {
  getProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/profileController.js";

const router = express.Router();

router.get("/me", getProfile);
router.put("/me", updateProfile);
router.delete("/", deleteProfile);

export default router;
