const userModel = require("../../models/userModel");
const isUser = require("../../utils/isUser");

const signUpService = async  (name,email,password)=>{
    console.log("signupservice")
    const User =await isUser(email);
    if(!User){
    const result = await userModel.create({name,email,password});
    // console.log(result);
    return result ;
    }
    return null;
}
module.exports = signUpService;