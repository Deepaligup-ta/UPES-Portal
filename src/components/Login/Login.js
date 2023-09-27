import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import logo from "../../assets/upesfull.png";
import bg from "../../assets/upes-web-banner.mp4";
import { getAuthToken, signIn } from "../../Helper/Authentication";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [sapId, setSapId] = useState(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const token = getAuthToken()
    if(token) {
      if(token.user.role === "faculty") return navigate('/faculty')
      if(token.user.role === "management") return navigate('/faculty')
    }
    
  })
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!password.trim()) {
      setError("Password is required");
      return;
    }
    signIn({ sapId: sapId, password: password })
      .then((data) => {
        if (data.changePassword) return navigate("/newpassword");
        if (data.user.role === "faculty") return navigate("/faculty");
        if (data.user.role === "management") return navigate("/management");
        if (data.user.role === "admin") return navigate("/faculty");
      })
      .catch((error) => {
        return navigate('/?error=true')
      });
  };

  return (
    <div className="login_main text-black">
      <div className="video-container">
        <video
          ref={videoRef}
          loop
          muted
          autoPlay={true}
          preload={true}
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
          <form onSubmit={handleSubmit}>
            <h5>E-mail</h5>
            <input
              type="username"
              value={sapId}
              onChange={(e) => setSapId(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login__signInButton bg-blue ">
              Sign In
            </button>
          </form>
        </div>
        <p>
          By signing-in you agree to the LOREM Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads
          Notice.
        </p>
      </div>
    </div>
  );
};

export default Login;
