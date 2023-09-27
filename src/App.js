import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/home/Home";
import Management from "./components/Management/Management";
import Login from "./components/Login/Login";
import FacultyDashboard from "./components/faculty/Pages/Dashboard";
import Policies from "./Pages/Policies";
import Password from "./components/Password/Password";
import Timetable from "./components/faculty/Pages/Timetable";
import Timetable_Management from "./components/Management/Pages/Timetable";
import Post from "./components/Management/Pages/Post";
import FacultyRoute from "./Routes/Faculty";
import Dashboard from "./Pages/Dashboard";
import { isAuthenticated, isFaculty } from "./Helper/Authentication";

const App = () => {

  return (
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<Login /> } 
          />
          <Route element={<FacultyRoute />}>
            <Route path="/faculty" element={<FacultyDashboard/>} />
            <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
            <Route path="/faculty/timetable" element={<Timetable/>}/>
          </Route>
          <Route 
            path="/newpassword" 
            element={isAuthenticated() ? <Password />: <Navigate to="/" />} 
          />
          <Route path="/management" element={<Home />} />
          {/* <Route path="/faculty" element={<Faculty />} />
          <Route path="/faculty/timetable" element={<Timetable/>}/> */}
          <Route path="/management/timetable" element={<Timetable_Management/>}/>
          <Route path="/management/post" element={<Post/>} />

          <Route path="/policies" element={<Policies />} />
          {/* <Route path="/new-login" element={<Password />} /> */}
        </Routes>
      </Router>
  );
}

export default App;
