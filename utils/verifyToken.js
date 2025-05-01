import jwt from "jsonwebtoken";
import { createError } from "./create-error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log({ token });
  if (!token) {
    return next(createError("You are not authenticated", 401));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(createError("Token is not valid", 403));
    }
    req.user = user;
    next();
  });
};
