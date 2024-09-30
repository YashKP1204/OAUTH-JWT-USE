const userModel = require("../../models/userModel")
const bcrypt = require("bcrypt");
const loginService = async (email,password)=>{
    console.log("login service")
    const user = await userModel.findOne({email});
    if(user){
        // console.log(user);
        // console.log("password: ",password);
        // console.log("user-password:",user.password);
        const comparePassword = await bcrypt.compare(password,user.password);
        // console.log("comparePassword",comparePassword);
        if(comparePassword){
            return user;
        }
    }
    return null;   
}
module.exports = loginService