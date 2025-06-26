import express from "express";

const router = express.Router();

router.get("/user", (req, res) => {
  // Simulate fetching user data
  const user = {
    id: 1,
    name: "John Doe",
    email: "jd@gmail.com",
    profileImage: "https://example.com/profile.jpg",
  };

  res.status(200).json({
    success: true,
    message: "User data fetched successfully",
    user,
  });
});

export default router;
