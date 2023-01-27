import fast2sms from "fast-two-sms";
import dotenv from "dotenv";
dotenv.config();

const key = process.env.KEY;

const Options = {
    authorization: key,
    message: "anas",
    numbers: ["8983768055"],
  };
  await fast2sms
    .sendMessage(Options)
    .then((res) => {
      console.log(res, " res fast2sms");
    })
    .catch((err) => {
      console.log(err, " err fast2sms");
    });