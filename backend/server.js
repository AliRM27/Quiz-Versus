import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import {
  authRoutes,
  categoryRoutes,
  shopRoutes,
  profileRoutes,
  quizRoutes,
} from "./routes/imports.js";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5555;
const app = express();

app.use(cors());
app.use(express.json());

//Mobile App
//entry point
app.get("/", (req, res) => {
  res.send("Welcome to the mobile app");
});

app.use("/api/auth", authRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/shop", shopRoutes);
app.use("/api/users", profileRoutes);

app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log(`Server running on port ${PORT}`);
});
