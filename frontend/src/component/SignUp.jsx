import React from 'react'

const SignUp = ({setToggle}) => {
  return (
    <div>
        <div className="login">
        <h1>SignUp</h1>
        <div className="form">
        <input type="text" placeholder='name' />
        <br />
          <input type="text" placeholder='email' />
          <br />
          <input type="text" placeholder='password' />
          <br />
          <button>Submit</button>
          <br />
          <p>Existing User?<span onClick={()=>{setToggle(false)}} style={{color:"lightblue",textDecoration:"underline"}} >Login</span> </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
