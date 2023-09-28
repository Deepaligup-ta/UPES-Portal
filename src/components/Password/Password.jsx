import React, { useState, useRef } from "react";
import "./Password.css"; // You can remove this line
import bg from "../../assets/upes-web-banner.mp4";
import axios from "axios";

const Password = () => {
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
      .post("https://wt31hwj1-8000.inc1.devtunnels.ms/api/token/", {
        sap: email,
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
            // add condition if the user is faculty or management, and for management role is 1 and for faculty role is 2
            if (response.data.role === 1) {
              window.location.href = "/home";
            } else if (response.data.role === 2) {
              window.location.href = "/faculty";
            }
          })
          .catch((error) => {
            console.error(error);
            setError("Failed to get user details");
          });
      })
      .catch((error) => {
        console.error(error);
        setError("Invalid email or password");
      });
    console.log(email, password);
  };
  const videoRef = useRef(null);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center relative">
      <div className=" inset-0">
        <video
          ref={videoRef}
          loop
          muted
          autoPlay={true}
          preload={true}
          data-preload="true"
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="bg-white absolute right-32 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl mb-4 text-center text-black">
          Change Your Password
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-black" htmlFor="email">
              Old Password
            </label>
            <input
              type="password"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-black" htmlFor="password">
              New Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Change Now
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {userData && (
          <p className="text-center mt-4">
            Welcome {userData.first_name} {userData.last_name}!
          </p>
        )}
        <p className="mt-4 text-sm text-center">
          By signing in, you agree to the LOREM Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads
          Notice.
        </p>
      </div>
    </div>
  );
};

export default Password;
