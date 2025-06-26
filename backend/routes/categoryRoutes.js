import express from "express";
import {
  getAllCategories,
  getAllQuizzesByCategory,
  removeCategory,
  createCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id/quizzes", getAllQuizzesByCategory);
router.post("/", createCategory);
router.delete("/", removeCategory);

export default router;
