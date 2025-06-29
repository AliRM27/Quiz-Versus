import User from "../models/User.js";
import { promoteUserToAdmin } from "../services/promoteToAdmin.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const toPromoteUserToAdmin = async (req, res) => {
  const { email } = req.body;

  try {
    await promoteUserToAdmin(email);
    res.json({ message: `User ${email} promoted to admin successfully` });
  } catch (error) {
    console.error("Error promoting user:", error);
    res.status(500).json({ message: "Failed to promote user" });
  }
};
