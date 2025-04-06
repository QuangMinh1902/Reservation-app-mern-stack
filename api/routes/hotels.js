import express from "express";
import Hotel from "../models/Hotel.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is hotel route");
});

router.post('/',async (req, res) => {
  try {
    await Hotel.create(req.body);
    res.status(201).json("Hotel created successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id',async (req, res) => {
  try {
    await Hotel.updateOne({_id: req.params.id}, {$set: req.body});
    res.status(200).json("Hotel updated successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;

