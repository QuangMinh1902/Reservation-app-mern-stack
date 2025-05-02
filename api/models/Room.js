import mongoose from "mongoose";
const { Schema } = mongoose;

const roomSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },

    price: {
      type: Number,
      unique: true,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    maxPeople: {
      type: Number,
      required: true,
    },

    roomNumbers: {
      type: [
        {
          _id: false,
          number: { type: Number, required: true },
          unavailableDates: { type: [Date] },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Room", roomSchema);
