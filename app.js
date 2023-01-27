import express from "express";
import dotenv from 'dotenv'
import './SMTP/transpoter.js'
import { emailSender } from "./controller/callbackFunction.js";
let app = express();
dotenv.config()
const port= process.env.PORT


app.get("/",emailSender)



app.listen(port, () => {
  console.log(`server started at ${port}`);
});
