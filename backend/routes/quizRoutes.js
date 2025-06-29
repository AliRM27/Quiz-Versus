import express from "express";
import {
  getAllQuizzes,
  getQuizById,
  deleteQuiz,
  updateQuiz,
  createQuiz,
} from "../controllers/quizController.js";

const router = express.Router();

router.get("/", getAllQuizzes);
router.get("/:id", getQuizById);

export default router;
