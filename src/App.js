import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Management from "./components/Management/Management";
import Login1 from "./components/Login/Login1";
import Faculty from "./components/faculty/Faculty";
import Policies from "./Pages/Policies";
import Password from "./components/Password/Password";
import { isAuthenticated } from "./Helper";

function App() {
  // Retrieve the user's role from sessionStorage
  if (sessionStorage.getItem("info") === null) {
    sessionStorage.setItem("info", JSON.stringify({ role: "0" }));
  }
  const userRole = JSON.parse(sessionStorage.getItem("info")).role;
  // then console log role
  console.log(userRole);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login1 />} />
          <Route
            path="/home"
            element={
              isAuthenticated() && userRole === 1 ? (
                <Home />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/faculty"
            element={
              isAuthenticated() && userRole === 2 ? (
                <Faculty />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/management" element={<Management />} />
          <Route path="/policies" element={<Policies />} />
          {/* <Route path="/new-login" element={<Password />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
