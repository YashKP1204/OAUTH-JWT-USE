const jwt = require('jsonwebtoken');
const generateToken = (_id,email)=>{
    const token = jwt.sign({email,_id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_TIMEOUT});
    return token ;
}
module.exports = generateToken;