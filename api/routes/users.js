import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../../utils/verifyToken.js";

const router = express.Router();

router.get("/checkAuthentication", verifyToken, (req, res) => {
  res.send("Heelloooo,You are logged in");
});

router.get("/", getUsers);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);

router.post("/:id", createUser);

export default router;
