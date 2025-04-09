import express from "express";
import Hotel from "../models/Hotel.js";
import { createHotel ,deleteHotel,getHotel, updateHotel} from "../controllers/hotel.js";
const router = express.Router();

router.get("/:id", getHotel);

router.post("/", createHotel);

router.delete("/:id",deleteHotel);

router.put("/:id",updateHotel);

export default router;
