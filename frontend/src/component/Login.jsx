import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
const Login = ({googleLogin,setToggle}) => {
  const navigate = useNavigate();
  const [formdetails,setFormDetails] = useState({email:"",password:"",});
  console.log(formdetails)
  const handleChange = (event)=>{
    setFormDetails(()=>{
      return {...formdetails,[event.target.name]:event.target.value}
    })
  }
  const handleSubmit = async()=>{
    try {
      setFormDetails({email:"",password:""});
      const result = await login(formdetails);
      console.log("handleSubmit")
      if(result){
        const {user} = result.data;
      const {name,email} = user;
      const {token} = result.data;
      const userInfo = {name,email,token};
      localStorage.setItem('user-info',JSON.stringify(userInfo));
      navigate("/dashboard")
      }
      
    } catch (error) {
      console.log(error.message)
      alert("Invalid User email or password. Try again")
    }
  }
  return (
    <div>
      <div className="login">
        <h1>Login</h1>
        <div className="form">
          <input type="text" placeholder='email' onChange={handleChange} name="email" value={formdetails.email} />
          <br />
          <input type="password" placeholder='password' onChange={handleChange} name="password" value={formdetails.password} />
          <br />
          <button onClick={handleSubmit} >Submit</button>
          <br />
          <button onClick={googleLogin}> <img src="images\googlelogo.png" height={20} width={20} alt="google" /> Login with Google</button>
          <br />
          <p>New User? <span onClick={(event)=>{ event.preventDefault(); setToggle(true)}} style={{color:"lightblue",textDecoration:"underline"}} >Sign-up</span> </p>
        </div>
      </div>
    </div>
  )
}

export default Login
