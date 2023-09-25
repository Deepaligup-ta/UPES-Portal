import React, { useRef, useState } from "react";
import "./Login.css";
import logo from "../../assets/upesfull.png";
import bg from "../../assets/upes-web-banner.mp4"
import { signIn } from "../../Helper/Authentication";
import { useNavigate } from "react-router-dom";

const Login1 = () => {
    // const [email, setEmail] = useState("");
    const [sapId, setSapId] = useState(0);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [userData, setUserData] = useState(null);

    const videoRef = useRef(null);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!password.trim()) {
            setError("Password is required");
            return;
        }
        signIn({ sapId: sapId, password: password})
            .then(data => {
                console.log(data)
                if(data.changePassword)
                    return navigate('/newpassword')
                if(data.user.role === "faculty")
                    return navigate('/faculty')
                if(data.user.role === 'management')
                    return navigate('/management')
                if(data.user.role === 'admin')
                    return navigate('/faculty')
            })
            .catch(error => {
                console.log(error)
            })
        console.log(sapId, password);
        
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
