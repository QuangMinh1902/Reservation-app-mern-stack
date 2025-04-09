import { createError } from "../../utils/create-error.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { promisify } from "util";

const saltRounds = 10;
const hashPassword = promisify(bcrypt.hash);
const comparePassword = promisify(bcrypt.compare);

export const register = async (req, res, next) => {
  try {
    const newUser = await User.create({
      ...req.body,
      password: await hashPassword(req.body.password, saltRounds),
    });
    res.status(201).json(newUser);
  } catch (error) {
    next(createError("Error creating user", 500));
  }
};

export const login = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return next(createError("User not found", 404));

  const isPasswordValid = await comparePassword(
    req.body.password,
    user.password
  );
  if (!isPasswordValid) return next(createError("Invalid password", 401));
  res.status(200).json(user); 
};
