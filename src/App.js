import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import Home from "./Components/home/Home";
import Login from "./Components/Login/Login";
import Faculty from "./Components/faculty/Faculty";
import Policies from "./Pages/Policies";
import Management from "./Components/Management/Management";
import Password from "./components/Password/Password";
import Timetable from "./components/faculty/Pages/Timetable";
import Timetable_Management from "./Components/Management/Pages/Timetable";
import Post from "./Components/Management/Pages/Post";
import FacultyRoute from "./Routes/Faculty";
import Dashboard from "./Pages/Dashboard";

const App = () => {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<FacultyRoute />}>
            <Route path="/faculty" element={<Faculty/>} />
          </Route>
          {/* <Route
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
          /> */}
          <Route path="/newpassword" element={<Password />} />
          <Route path="/management" element={<Management />} />
          {/* <Route path="/faculty" element={<Faculty />} />
          <Route path="/faculty/timetable" element={<Timetable/>}/> */}
          <Route path="/management/timetable" element={<Timetable_Management/>}/>
          <Route path="/management/post" element={<Post/>} />

          <Route path="/policies" element={<Policies />} />
          {/* <Route path="/new-login" element={<Password />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
