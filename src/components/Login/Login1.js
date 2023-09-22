import React, { useRef, useState } from "react";
import "./Login1.css";
import logo from "../../assets/upesfull.png";
import axios from "axios";
import bg from "../../assets/upes-web-banner.mp4"

const Login1 = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [userData, setUserData] = useState(null);

    const videoRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!password.trim()) {
            setError("Password is required");
            return;
        }
        axios
            .post("https://wt31hwj1-8000.inc1.devtunnels.ms/api/token/", {
                sap: email,
                password: password,
            })
            .then((response) => {
                console.log(response.data);

                sessionStorage.setItem("info", JSON.stringify(response.data));
                if (response.data.role === 1) {
                    window.location.href = "/home";
                }
                else if (response.data.role === 2) {
                    window.location.href = "/faculty";
                }
               

               
                
                // do something with the response data
            })
            .catch((error) => {
                console.error(error);
                setError("Invalid email or password");
            });
        console.log(email, password);
        
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

            <div className="login__container text-black z-50 absolute" style={{right:80}}>
                <h1 className="text-xl">Welcome To UPES Management Portal</h1>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <h5>E-mail</h5>
                        <input
                            type="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <h5>Password</h5>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="login__signInButton">
                            Sign In
                        </button>
                    </form>
                    {error && <p>{error}</p>}
                    {userData && (
                        <p>
                            Welcome {userData.first_name} {userData.last_name}!
                        </p>
                    )}
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

export default Login1;
