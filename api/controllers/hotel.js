import {createError} from "../../utils/create-error.js";
import Hotel from "../models/Hotel.js";

export const createHotel =  async (req, res) => {
  try {
    await Hotel.create(req.body);
    res.status(201).json("Hotel created successfully");
  } catch (error) {
    res.status(500).json(error);
  }
}

export const deleteHotel = async (req, res) => {
  try {
    await Hotel.deleteOne({ _id: req.params.id });
    res.status(201).json("Hotel deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
}

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json("Hotel not found");
    }
    res.status(200).json(hotel);
  } catch (error) {
    next(createError( "Erroorr..... Error", 500));
  }
}

export const updateHotel=  async (req, res) => {
    try {
      await Hotel.updateOne({ _id: req.params.id }, { $set: req.body });
      res.status(200).json("Hotel updated successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  }