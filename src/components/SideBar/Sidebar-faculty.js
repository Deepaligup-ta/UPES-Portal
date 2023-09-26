import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/upesfull.png";
import "./Sidebar.css";
import { FaBars,  FaCross, Fa } from "react-icons/fa";
import cross from "./images/circle-xmark-regular.svg"
const Sidebar_faculty = () => {
  const box = useRef();
  const inBox = useRef();

  const [boxStyle, setBoxStyle] = useState({ width: "80px" });
  const [smallBoxStyle, setSmallBoxStyle] = useState({
    transform: "translateX(0%)",
  });
  const [bigBoxStyle, setBigBoxStyle] = useState({
    transform: "translateX(-50vw)",
  });
  const backMove = () => {
    setBoxStyle({ width: "80px" });
    setSmallBoxStyle({ transform: "translateX(0%)", position: "relative" });
    setBigBoxStyle({ transform: "translateX(-50vw)" });
  };


  const toggleSidebar = () => {
    if (boxStyle.width === "80px") {
      setBoxStyle({ width: "max-content" });
      setSmallBoxStyle({
        transform: "translateX(-100%)",
        position: "absolute",
      });
      setBigBoxStyle({ transform: "translateX(0%)" });
    } else {
      setBoxStyle({ width: "80px" });
      setSmallBoxStyle({ transform: "translateX(0%)", position: "relative" });
      setBigBoxStyle({ transform: "translateX(-50vw)" });
    }
  };

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <button className="ham-btn w-20 absolute" onClick={toggleSidebar}>
        {boxStyle.width === "80px" ? (
          <FaBars className="content-center w-14 h-14 z-50" />
        ) : (
          <img src={cross} className=" right-4 w-6 h-6 z-50" />
        )}
      </button>

      <div className={`navbar-main container`} style={boxStyle} ref={box}>
        <div className="nav-vert-out" style={smallBoxStyle}>
          <div className="navbar-vertical">
            <span className="rotate-text-container">
              <h1 className="rotate-text" style={{ fontSize: "25px" }}>
                SCHOOL OF COMPUTER SCIENCE
              </h1>
            </span>
          </div>
        </div>
        <div
          className={`navbar-inner d-flex flex-column align-items-center justify-content-center`}
          style={bigBoxStyle}
        >
          <div className="logo-img">
            <img src={logo} className="logo-new w-36 content-center"></img>
          </div>

          <div className="list-items pt-12">
            <div className="profile-photo pt-10 ">
              <img src="" alt="profile photo" className="w-28 rounded-full" />
              <h1 className="text-white text-center text-xl">Name</h1>
              <br />
              <h1 className="text-white text-center text-xl"></h1>
            </div>
            <ul className="container d-flex flex-column align-items-start gap-1 ul-contain">
              <li>
                <NavLink
                  to="/Dashboard"
                  onClick={backMove}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  {" "}
                  <img src="../images/dashboard-logo.svg" alt="dashboard" />
                  <span class="list-item-text">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/calendar"
                  onClick={backMove}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  {" "}
                  <img
                    src="../images/dashboard-logo.svg"
                    alt="dashboard"
                  />{" "}
                  <span class="list-item-text">Calendar</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/courses"
                  onClick={backMove}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <img
                    src="../images/timetable-logo.svg"
                    alt="timetable-logo"
                  />
                  <span class="list-item-text">Courses</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/broadcast"
                  onClick={backMove}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <img
                    src="../images/timetable-logo.svg"
                    alt="timetable-logo"
                  />
                  <span class="list-item-text">Broadcast</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/faculty/timetable"
                  onClick={backMove}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <img
                    src="../images/timetable-logo.svg"
                    alt="timetable-logo"
                  />
                  <span class="list-item-text">Time Table</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Policies"
                  onClick={backMove}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <img src="../images/policies-logo.svg" alt="policies-logo" />
                  <span class="list-item-text">Policies</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/syllabus"
                  onClick={backMove}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <img src="../images/policies-logo.svg" alt="policies-logo" />
                  <span class="list-item-text">Syllabus</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/assessment"
                  onClick={backMove}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <img src="../images/policies-logo.svg" alt="policies-logo" />
                  <span class="list-item-text">assessment</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/awardsheets"
                  onClick={logout}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <img src="../images/policies-logo.svg" alt="policies-logo" />
                  <span class="list-item-text">Award Sheets</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Logout"
                  onClick={() => logout()}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <img src="../images/logout-logo.svg" alt="logout-logo" />
                  <span class="list-item-text">Logout</span>
                </NavLink>
              </li>
              {/* {click === 'dashboard' && <Dashboard />}
                {click === 'calender' && <Calender />}
                {click === 'courses' && <Courses />}
                {click === 'broadcast' && <Broadcast />}
                {click === 'timetable' && <Timetable />}
                {click === 'policies' && <Policies />}
                {click === 'syllabus' && <Syllabus />}
                {click === 'assessment' && <Assessment />}
                {click === 'awardSheets' && <Awardsheets />} */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar_faculty;
