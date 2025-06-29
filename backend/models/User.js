import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  name: { type: String },
  profileImage: { type: String },
  stars: { type: Number, default: 0 }, // In-game currency
  completedQuizzes: [
    {
      quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
      completedAt: { type: Date, default: Date.now },
    },
  ],
  progress: [
    {
      quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
      score: { type: Number, default: 0 },
    },
  ],
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);
export default User;
