const googleLogin = require("../../controllers/Authentication/googleAuthController");
const loginController = require("../../controllers/Authentication/loginController");
const signUpController = require("../../controllers/Authentication/signUpController");

const router = require("express").Router();

router.get("/test",(req,res)=>{
    res.send({message:"test passw"});
});

router.get('/google',googleLogin);
router.post("/signup",signUpController);
router.post("/login",loginController);
module.exports = router;