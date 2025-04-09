import { createError } from "../../utils/create-error.js";
import User from "../models/User.js";

export const register = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(createError("Error creating user", 500));
  }
};
