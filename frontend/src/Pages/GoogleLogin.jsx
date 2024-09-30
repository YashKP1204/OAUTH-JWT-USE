import React, { useState } from 'react'
import {useGoogleLogin} from "@react-oauth/google"
import { googleAuth } from '../api'
import {useNavigate} from "react-router-dom"
import Login from '../component/Login'
import SignUp from '../component/SignUp'
const GoogleLogin = () => {
  const navigate = useNavigate();
  const [toggle,setToggle] = useState(false);
  const responeGoogle = async (authResult)=>{
    try {
      if(authResult['code']){
        const result = await googleAuth(authResult['code']);
        const {email,name,image} = result.data.user;
        const token = result.data.token;
        console.log("user data == ",result.data.user);
        console.log("Token : ",token);
        const obj = {email,name,image,token}
        localStorage.setItem("user-info",JSON.stringify(obj))
        navigate("/dashboard");
      }
      console.log(authResult)
    } catch (error) {
      console.log("Error while requesting google code : ",err);
    }
  }
  const googleLogin = useGoogleLogin({
    onSuccess:responeGoogle,
    onError:responeGoogle,
    flow:'auth-code',
  })
  return (
    <div className='App'>
      {!toggle?<Login googleLogin = {googleLogin} setToggle={setToggle} />:<SignUp setToggle={setToggle} />}
    </div>
  )
}

export default GoogleLogin;