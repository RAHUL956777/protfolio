import { User } from "../model/User.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "login to Access This Resource",
      });
    }

    const decoded = jwt.verify(token, process, env.JWT_SECRET);

    const user = await User.findById(decoded._id);

    req.user = user;
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
