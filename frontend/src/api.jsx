import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:8080/auth"
}
)
const signup = async (body)=>{
    return api.post("/signup",body);
}
const login = async (body)=>{
    return api.post("/login",body);
}
const googleAuth = (code)=>api.get(`/google?code=${code}`)
export {googleAuth,signup,login};