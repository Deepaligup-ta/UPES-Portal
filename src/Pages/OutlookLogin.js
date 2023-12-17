import React, { useEffect, useState } from "react"
import {Form, Button, Typography, Spin } from 'antd'
import { LockOutlined, WindowsFilled } from '@ant-design/icons'
import { useMsal } from '@azure/msal-react'
import "../Assets/Style/Login.css"
import logo from "../Assets/Media/upesfull.png"
import bg from "../Assets/Media/bgimage.jpg"
import { checkOutlook, getAuthToken, signIn } from "../Helper/Authentication/index"
import { useNavigate, useLocation } from "react-router-dom"

const OutlookLogin = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { instance, inProgress, } = useMsal()

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
      if(token.user.role === "faculty") return navigate('/faculty/dashboard')
      if(token.user.role === "management") return navigate('/management/dashboard')
    }
    
  }, [])

  const navigate = useNavigate()
  const login = () => {
    setLoading(true)
    instance.loginPopup({
        scopes: ["User.Read", "Calendars.Read", "offline_access"]
    }).then(result => {
        checkOutlook(result.accessToken)
            .then((res) => {
                if(res.solution) {
                    window.sessionStorage.setItem('outlook', JSON.stringify({ email: result.account.username, accessToken: result.accessToken }))
                    return navigate('/link-account')
                }
                window.sessionStorage.setItem('outlook', JSON.stringify({ email: result.account.username, accessToken: result.accessToken }))
                if(res.user.role === "faculty") return navigate('/faculty/dashboard')
                if(res.user.role === "management") return navigate('/management/dashboard')
            })
            .catch(error => {
                setError(true)
                setLoading(false)
            })
        setLoading(false)
    }).catch(error => {
        setError(true)
        setLoading(false)
    })
}

  return (
    <div className="login_main text-black">
      <div className="video-container">
        <img className="responsive-video bg-cover" src={bg} />
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
                onFinish={() => null}
            >
                <Form.Item>
                    <Button  type="primary" onClick={login} on className="login-form-button">
                        Login Using Your Microsoft Organization Account
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

export default OutlookLogin
