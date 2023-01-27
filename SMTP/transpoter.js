import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const user = process.env.USER;
const pass = process.env.PASS;
const host = process.env.HOST
const service =process.env.SERVICE;
const transporter = nodemailer.createTransport({
  host: host,
  service: service,
  secure: true,
  port: 587,
  auth: {
    user,
    pass,
  },
});

export default transporter;
