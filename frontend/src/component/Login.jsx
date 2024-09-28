import React from 'react'
import "./Login.css"
const Login = ({googleLogin,setToggle}) => {
  return (
    <div>
      <div className="login">
        <h1>Login</h1>
        <div className="form">
          <input type="text" placeholder='email' />
          <br />
          <input type="text" placeholder='password' />
          <br />
          <button>Submit</button>
          <br />
          <button onClick={googleLogin}> <img src="images\googlelogo.png" height={20} width={20} alt="google" /> Login with Google</button>
          <br />
          <p>New User? <span onClick={()=>{setToggle(true)}} style={{color:"lightblue",textDecoration:"underline"}} >Sign-up</span> </p>
        </div>
      </div>
    </div>
  )
}

export default Login
