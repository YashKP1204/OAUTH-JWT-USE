const loginService = require("../../service/Authentication/loginService");
const generateToken = require("../../utils/tokengenerator");
const loginController = async(req,res)=>{
    try {
        console.log("logincontroller")
        const {email,password} = req.body;
    const isUser = await  loginService(email,password);
    if(isUser){
        const token = generateToken(isUser._id,isUser.email);
        return res.status(200).send({
            success:true,
            message:"Valid User",
            user:isUser,
            token
        })
    }
    return res.status(401).send({
        success:false,
        message:"Invalid user email or password",
    })
    } catch (error) {
        res.status(500).send({
            success:false,
            error:error.message
        })
    }
}
module.exports = loginController;
