import express from "express";
import {
  getAllQuizzes,
  getQuizById,
  deleteQuiz,
  updateQuiz,
  createQuiz,
} from "../controllers/quizController";

const router = express.Router();

router.get("/", getAllQuizzes);
router.get("/:id", getQuizById);
router.post("/", createQuiz);
router.put("/:id", updateQuiz);
router.delete("/:id", deleteQuiz);

export default router;
