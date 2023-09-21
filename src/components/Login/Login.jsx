import React from 'react'
import upesfull from '../../assets/upesfull.png'
import './Login.css'

const Login = () => {
  return (
    <>
    <img src={upesfull} id="upesfull" />
    <div>
        <form class="center" id ="loginform">
            <div id = "logindiv" class="center">
            <h2 id = "welcome">Welcome to UPES!</h2>
            <label>Username: </label>
            <input type = "text" name="username" placeholder="Username" />
            <br />
            <label>Password: </label>
            <input type = "password" name = "password" placeholder="Password" />
            <br />
            <label>Position: </label>
            <select name="position" id="position">
                <option value="mgmt">Management</option>
                <option value="faculty">Faculty & Staff</option>
                <option value = "student">Student</option>
            </select>
            <br />
            <button type="submit" id="loginbtn">LOGIN</button>
            </div>
        </form> 
    </div>
    </>
  )
}

export default Login


