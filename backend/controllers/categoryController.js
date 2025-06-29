import Category from "../models/Category.js";
import Quiz from "../models/Quiz.js";

export const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Category name is required" });
  }

  try {
    const newCategory = new Category({ name });
    await newCategory.save();
    res.status(201).json({ success: true });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const removeCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const deletedCategory = await Category.find({ name }).deleteOne();
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllQuizzesByCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const quizzes = await Quiz.find({ category: id }).populate("category");
    if (!quizzes.length) {
      return res
        .status(404)
        .json({ message: "No quizzes found for this category" });
    }
    res.status(200).json(quizzes);
  } catch (error) {
    console.error("Error fetching quizzes by category:", error);
    res.status(500).json({ message: "Server error" });
  }
};
