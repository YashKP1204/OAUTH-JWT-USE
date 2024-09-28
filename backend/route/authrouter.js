const { googleLogin } = require("../controllers/authController");

const router = require("express").Router();

router.get("/test",(req,res)=>{
    res.send({message:"test passw"});
});
router.get('/google',googleLogin);
module.exports = router;