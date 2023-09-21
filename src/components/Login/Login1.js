import React from 'react'
import "./Login1.css"
import logo from "../../assets/upesfull.png"
const Login1 = () => {
  return (
    <div className='login text-black'>
                <img className='login__logo' src={logo} alt="Logo" />

        <div className='login__container text-black'>
            <h1>Welcome To UPES Management Portal</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' />
                <h5>Password</h5>
                <input type='password' />
                <button type='submit' className='login__signInButton'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to the LOREM Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
        </div>

        
    </div>
  )
}

export default Login1