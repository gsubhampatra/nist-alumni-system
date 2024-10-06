import mongoose from "mongoose";
import log from "../utils/logger.js";
import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";
configDotenv();


export const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const GMAIL_USER = process.env.GMAIL_USER;
export const FRONTEND_URL = process.env.FRONTEND_URL;
//db configuration
export const DBConnect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    log.info("DB connected successfully");
  } catch (error) {
    log.error(error.message);
  }
};

export const mailer = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
   auth: {
    user: process.env.GMAIL_USER, // Your Gmail account email
    pass: process.env.GMAIL_APP_PASS, // Your Gmail App Password
  },
});
