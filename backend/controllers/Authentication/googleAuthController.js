const userModel = require("../../models/userModel");
const {oauth2client} = require("../../utils/googleConfig");
const generateToken = require("../../utils/tokengenerator")
const axios = require("axios");
const jwt = require("jsonwebtoken");
const googleLogin = async(req,res)=>{
    try {
        // console.log("AOUTHCONTROLLER CALLING")
        const {code} = req.query;
        // console.log("code:",code)
        const googleRes= await oauth2client.getToken(code);
        // console.log(googleRes);
        oauth2client.setCredentials(googleRes.tokens);
        const userRes = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`);
        const {email,name,picture} = userRes.data;
        // console.log("userdata : ",userRes.data);
        let user = await userModel.findOne({email});
        if(!user){user = await  userModel.create({
            name,email,image:picture
        })}
        const {_id} =  user;
        const token = generateToken(_id,email);
        // console.log(token)
        return res.status(200).send({
            message:"success",
            token,
            user
        })
    } catch (error) {
        res.status(500).send({
            messge:"Internal server error"
        })
    }
}
module.exports = googleLogin;
