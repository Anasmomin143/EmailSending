import otpGenerator from "otp-generator";
const generateOtp=()=>{
   const otp = otpGenerator.generate(4, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });
     return otp
}

export {generateOtp}