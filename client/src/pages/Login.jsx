import React from 'react'
import Github from '../img/github.png'

const Login = () => {
  const githubLogin = () => {
    // Perform a request from Server
    window.open("http://localhost:5000/auth/github", "_self");  //In the main Server Indexjs file, call the 'auth' router and access its 'google' route
  };

  return (
    <div className='login'>
        <h1 className="login-title">Login to your account</h1>
                <div className="login-button github" onClick={githubLogin}>
                    <img src={Github} alt="" className="icon" />
                    Login
                </div>
    </div>
  )
}

export default Login