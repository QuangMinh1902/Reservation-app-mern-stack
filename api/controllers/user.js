import { createError } from "../../utils/create-error.js";
import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json("User created successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(201).json("User deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json("User not found");
    }
    res.status(200).json(user);
  } catch (error) {
    next(createError("User not found", 404));
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(createError("Erroorr while retrieving all users", 500));
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.updateOne({ _id: req.params.id }, { $set: req.body }).exec();
    res.status(200).json("User updated successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};
