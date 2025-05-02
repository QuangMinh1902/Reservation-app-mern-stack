import express from "express";
import Hotel from "../models/Hotel.js";
import {
  createHotel,
  deleteHotel,
  getHotel,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../../utils/verifyToken.js";

const router = express.Router();

router.get("/:id", getHotel);

router.post("/", verifyAdmin, createHotel);

router.delete("/:id", verifyAdmin, deleteHotel);

router.put("/:id", verifyAdmin, updateHotel);

export default router;
