import React, { useState } from 'react'
import { signup } from '../api';
import {useNavigate} from "react-router-dom"
const SignUp = ({setToggle}) => {
  const navigate = useNavigate();
  const [formdetails,setFormDetails] = useState({name:"",email:"",password:"",});
  console.log(formdetails)
  const handleChange = (event)=>{
    
    setFormDetails(()=>{
      return {...formdetails,[event.target.name]:event.target.value}
    })
  }
  const handleSubmit = async()=>{
    try {
      console.log("handlesubmit")
      setFormDetails({name:"",email:"",password:"",})
    const result = await signup(formdetails);
    // console.log(result);
    const {user} = result.data
    console.log(user);
    const {name,email} = user;
    const {token} = result.data;
    const userInfo = {name,email,token};
    console.log(userInfo);
    localStorage.setItem('user-info',JSON.stringify(userInfo));
    navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
      alert("Email already exist. Try to signUp with other email");
    }  
  }

  return (
    <div>
        <div className="login">
        <h1>SignUp</h1>
        <div className="form">
        <input type="text" placeholder='name' name="name"onChange={handleChange} value={formdetails.name} />
        <br />
          <input type="text" placeholder='email' name="email" onChange={handleChange} value={formdetails.email} />
          <br />
          <input type="password" placeholder='password' name="password" onChange={handleChange} value={formdetails.password} />
          <br />
          <button onClick={handleSubmit}>Submit</button>
          <br />
          <p>Existing User?<span onClick={()=>{setToggle(false)}} style={{color:"lightblue",textDecoration:"underline"}} >Login</span> </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
