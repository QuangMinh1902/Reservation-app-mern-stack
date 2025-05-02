import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  updateRoom,
} from "../controllers/room.js";
import { verifyAdmin } from "../../utils/verifyToken.js";

const router = express.Router();

router.get("/:id", getRoom);

router.post("/:hotelId", verifyAdmin, createRoom);

router.delete("/:id", verifyAdmin, deleteRoom);

router.put("/:id", verifyAdmin, updateRoom);

export default router;
