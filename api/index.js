import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import hotelRoutes from "./routes/hotels.js";
import roomRoutes from "./routes/rooms.js"; 
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser())
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    console.log(error);
  }
};

app.use((req,res,next)=> {
  console.log("index.js middleware")
  next()
})

// Middlewares
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/rooms", roomRoutes);

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.use((error,req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message || "Something went wrong";
  console.log({error});
  res.status(status).json({ message });
})

app.listen(8800, () => {
  connectDB();
  console.log("Server booting up 🚀")
  console.log("Server is running on port 8800");
});
