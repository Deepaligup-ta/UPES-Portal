import React, { useState } from "react";
import "./Login1.css";
import logo from "../../assets/upesfull.png";
import axios from "axios";

const Login1 = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!password.trim()) {
            setError("Password is required");
            return;
        }
        axios
            .post("https://wt31hwj1-8000.inc1.devtunnels.ms/api/login/", {
                username: email,
                password: password,
            })
            .then((response) => {
                console.log(response.data);
                // do something with the response data
            })
            .catch((error) => {
                console.error(error);
                setError("Invalid email or password");
            });
        console.log(email, password);
    };

    return (
        <div className="text-black">
            <img className="login__logo" src={logo} alt="Logo" />

            <div className="login__container text-black">
                <h1 className="text-xl">Welcome To UPES Management Portal</h1>
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
                <p>
                    By signing-in you agree to the LOREM Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
                    Notice .
                </p>
            </div>
        </div>
    );
};

export default Login1;
