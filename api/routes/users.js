import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkAuthentication", verifyToken, (req, res) => {
//   res.send("Heelloooo,You are logged in");
// });

// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello, you are logged in and you can delete your account");
// });

// router.get("/checkAdmin/:id", verifyUser, (req, res, next) => {
//   res.send("Hello Admin, you are logged in and you can delete all accounts");
// });

router.get("/",verifyAdmin, getUsers);

router.get("/:id", verifyAdmin,getUser);

router.delete("/:id", verifyAdmin,deleteUser);

router.put("/:id",verifyAdmin ,updateUser);

router.post("/:id", verifyAdmin,createUser);

export default router;
