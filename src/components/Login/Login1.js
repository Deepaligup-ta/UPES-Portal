import React, { useState } from "react";
import "./Login1.css";
import logo from "../../assets/upesfull.png";
import axios from "axios";

const Login1 = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [userData, setUserData] = useState(null);
    const [token, setToken] = useState("");

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
                const token = response.data;

                localStorage.setItem("token", JSON.stringify(token));
                axios
                    .get("https://wt31hwj1-8000.inc1.devtunnels.ms/api/user/", {
                        headers: {
                            Authorization: `Token ${token.key}`,
                        },
                    })
                    .then((response) => {
                        console.log(response.data);
                        setUserData(response.data);
                        sessionStorage.setItem("user", JSON.stringify(response.data));
                        // add condition if user is faculty or management and for management role is 1 and for faculty role is 2
                        if (response.data.role === 1) {
                            window.location.href = "/home";
                        }
                        else if (response.data.role === 2) {
                            window.location.href = "/faculty";
                        }
                
                    })
                    .catch((error) => {
                        console.error(error);
                        setError("Failed to get user details");
                    });
                
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
                {userData && (
                    <p>
                        Welcome {userData.first_name} {userData.last_name}!
                    </p>
                )}
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
