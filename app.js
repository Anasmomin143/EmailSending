import express from "express";

import nodemailer from "nodemailer";
import otpGenerator from 'otp-generator'
let app = express();

app.get("/", (req, res) => {



  let otp=  otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false , lowerCaseAlphabets:false})  ;
  console.log(otp)
   

    const transporter =nodemailer.createTransport({
        host:'smtp.gmail.com',	
        service:'gmail',
        secure:true,
        port:587 ,
        auth:{
            user:'mustafamj805@gmail.com',
            pass:'bcipcspeygnqbcdn'
        }
    })
    const  mailOption = {
        from:'mustafamj805@gmail.com',
        to:['anasmomin001100@gmail.com','mdadnanengg@gmail.com','mustafamj805@gmail.com'],
        subject:'test',
        text:'hi boss',
        html:`
            <p style="color:red">otp is expring in 30 seconds</p>
        <h1> Your OTP IS ${otp} <h1/>,
        `,
        attachments:[ {   // file on disk as an attachment
            filename: 'text.txt',
            path: 'text.txt' // stream this file
        },]
    }
    transporter.sendMail(mailOption,(err,info)=>{
        if (err) throw err
        console.log(info)
        setTimeout(()=>{
            otp =null
            console.log(otp)
    },5000)
    })
});

app.listen(5000, () => {
  console.log("server is running");
});
