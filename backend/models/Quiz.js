import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  prize: {
    type: Number,
    required: true,
  },
  sections: [
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },
      difficulty: {
        type: String,
        required: true,
        enum: ["Easy", "Medium", "Hard"],
      },
      questions: [
        {
          question: {
            type: String,
            required: true,
            trim: true,
          },
          image: { type: String, trim: true }, // Optional image URL for the question
          video: { type: String, trim: true }, // Optional video URL for the question
          type: {
            type: String,
            required: true,
            enum: ["Multiple Choice", "True/False", "Short Answer"],
          },
          options: [
            {
              text: { type: String, required: true, trim: true },
              isCorrect: { type: Boolean, default: false },
            },
          ],
          explanation: { type: String, trim: true },
        },
      ],
    },
  ],
});

const Quiz = mongoose.model("Quiz", quizSchema);
export default Quiz;
