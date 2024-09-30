const userModel = require("../models/userModel")

const isUser = async(email)=>{
    const user = await userModel.findOne({email});
    return user;
}
module.exports = isUser;