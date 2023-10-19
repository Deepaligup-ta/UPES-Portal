import React, { useEffect, useRef, useState } from "react"
import {Form, Button, Input, Typography, Spin} from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import "../Assets/Style/Login.css"
import logo from "../Assets/Media/upesfull.png"
import bg from "../Assets/Media/upes-web-banner.mp4"
import { changePassword } from "../Helper/Authentication/index"
import { useNavigate } from "react-router-dom"

const Password = () => {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = "Change Password | SoCIS"
    if(!localStorage.getItem('user')) 
      return navigate('/')
    if(!JSON.parse(localStorage.getItem('user')).changePassword)
      return navigate('/')
    
  })
  const videoRef = useRef(null)
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    changePassword({ password: oldPassword, newpassword: newPassword })
      .then((data) => {
          if(data.error){
            setLoading(false)
            return setError(data)
          }
          localStorage.setItem('user', JSON.stringify({ changePassword: false }))
          return navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="login_main text-black">
      <div className="video-container">
        <video
          ref={videoRef}
          loop
          muted
          autoPlay={true}
          data-preload="true"
          playsInline
          className="responsive-video bg-cover"
        >
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <img className="login__logo" src={logo} alt="Logo" />

      <div
        className="login__container text-black z-50 absolute"
        style={{ right: 80 }}
      >
        <h1 className="text-3xl text-">Change Your Password To Continue</h1>
        <div className="form-container">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={() => null}
                onSubmitCapture={handleSubmit}
            >
                <Form.Item
                    name="oldpassword"
                    rules={[{ required: true, message: 'Please input your Old password' }]}
                >
                    <Input 
                        prefix={<LockOutlined className="site-form-item-icon" />} 
                        onChange={(e) => setOldPassword(e.target.value)} 
                        placeholder="Old Password"
                        value={oldPassword}
                        type="password"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        onChange={(e) => setNewPassword(e.target.value)}
                        value={newPassword}
                        placeholder="New Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button  type="primary" htmlType="submit" className="login-form-button">
                        Submit
                    </Button>
                </Form.Item>
                { loading ? <Spin /> : ""}
                {error ? <Typography style={{ background: '#fff', color: 'red', margin: '10px'}}>Error Occurred! {error.errorMessage}</Typography>: ""}

            </Form>
        </div>
        <p>
        
        </p>
      </div>
    </div>
  );
};

export default Password
