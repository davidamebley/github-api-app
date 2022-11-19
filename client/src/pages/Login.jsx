import React from 'react'
import Github from '../img/github.png'

const Login = () => {
  const github = null;
  return (
    <div className='login'>
        <h1 className="login-title">Login to your account</h1>
                <div className="login-button github" onClick={github}>
                    <img src={Github} alt="" className="icon" />
                    Login
                </div>
    </div>
  )
}

export default Login