import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import { createError } from "../../utils/create-error.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(createError("Error updating hotel", 500));
    }
    res.status(201).json(savedRoom);
  } catch (error) {
    next(createError("Error creating room", 500));
  }
};

export const deleteRoom = async (req, res) => {
  try {
    await Room.deleteOne({ _id: req.params.id });
    res.status(201).json("Hotel deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const hotel = await Room.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json("Hotel not found");
    }
    res.status(200).json(hotel);
  } catch (error) {
    next(createError("Erroorr..... Error", 500));
  }
};

export const updateRoom = async (req, res) => {
  try {
    await Room.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json("Hotel updated successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};
