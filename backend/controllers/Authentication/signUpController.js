const bcrypt = require('bcrypt');
const signUpService = require("../../service/Authentication/signUpService");
const generateToken = require("../../utils/tokengenerator");
const signUpController = async(req,res)=>{
    try {
        console.log("signupcontroller")
        // console.log(req);
        // console.log(req.body)
        const {name,email,password} = req.body;
    const encryptedPassword = await bcrypt.hash(password,8);
    const result = await signUpService(name,email,encryptedPassword);
    if(result){
        token = generateToken(result.email,result._id);
        return res.status(200).send({
            success:true,
            message:"new user signedUp",
            user:result,
            token
        })
    }
    return res.status(400).send({
        succes:false,
        message:"User Already signedUp"
    })
    } catch (error) {
        return res.status(500).send({
            success:false,
            error:error.message
        })
    }  
}
module.exports = signUpController