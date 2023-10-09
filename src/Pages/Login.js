import React, { useEffect, useRef, useState } from "react"
import {Form, Button, Input, Typography, Spin } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import "../Assets/Style/Login.css"
import logo from "../Assets/Media/upesfull.png"
import bg from "../Assets/Media/upes-web-banner.mp4"
import { getAuthToken, signIn } from "../Helper/Authentication/index"
import { useNavigate, useLocation } from "react-router-dom"

const Login = () => {
  const [sapId, setSapId] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const useQuery = () => {
    const { search } = useLocation()
    return React.useMemo(() => new URLSearchParams(search), [search])
  }
    const query = useQuery()
  let logout = query.get('logout')

  useEffect(() => {
    document.title = "Login | SoCIS"
    if(logout === 'true')
      alert('Logged Out!')
    const token = getAuthToken()
    if(token) {
      if(JSON.parse(localStorage.getItem('user')).changePassword)
        return navigate('/new-password')
      if(token.user.role === "faculty") return navigate('/faculty/dashboard')
      if(token.user.role === "management") return navigate('/management/dashboard')
    }
    
  }, [logout])

  const videoRef = useRef(null)
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    setLoading(true)
    event.preventDefault()
    signIn({ sapId: sapId, password: password })
      .then((data) => {
        localStorage.setItem('user', JSON.stringify({ changePassword: (data.changePassword ? true : false )}))
        if (data.changePassword) return navigate("/new-password")
        if (data.user.role === "faculty") return navigate("/faculty/dashboard")
        if (data.user.role === "management") return navigate("/management/dashboard")
        setLoading(false)
        setError(error)
      })
      .catch((error) => {
        setLoading(false)
        setError(error)
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
        <h1 className="text-3xl text-">Welcome To UPES Management Portal</h1>
        <div className="form-container">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={() => null}
                onSubmitCapture={handleSubmit}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your SAP Id!' }]}
                >
                    <Input 
                        prefix={<UserOutlined className="site-form-item-icon" />} 
                        onChange={(e) => setSapId(e.target.value)} 
                        placeholder="SAPID" 
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button  type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    { loading ? <Spin size="large" /> : ""}
                    {error ? <Typography style={{ background: '#fff', color: 'red', margin: '10px'}}>Error Signing In!</Typography>: ""}
                </Form.Item>
            </Form>
        </div>
        <p>
        
        </p>
      </div>
    </div>
  );
};

export default Login
