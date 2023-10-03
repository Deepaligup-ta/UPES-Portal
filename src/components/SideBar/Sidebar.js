import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/upesfull.png";
import "./Sidebar.css";
import { FaBars, FaCross, Fa } from "react-icons/fa";
import { logout } from "../../Helper/Authentication";
import cross from "./images/circle-xmark-regular.svg";
import Navitem from "./Navitem";
import pic_dashborad from "../../images/dashboard-logo.svg";
import pic_news from "./images/news-logo.svg";
import pic_policies from "./images/policies-logo.svg";
import pic_deadline from "./images/deadlines-logo.svg"
import pic_post from "./images/post.svg"
import pic_timetable from "./images/timetable-logo.svg"
import pic_courses from "./images/courses-logo.svg"
import pic_logout from "./images/logout-logo.svg"
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

  const dashboardMenu = [
    {
      to: "/management/dashboard",
      className: true ? "active" : "inactive",
      name: "Dashboard",
      icon: "../../images/dashboard-logo.svg",
    },

    {
      to: "/management/timetable",
      className: true ? "active" : "inactive",
      name: "Timetable",
      icon: "../../images/timetable-logo.svg",
    },
    {
      to: ".management/news",
      className: true ? "active" : "inactive",
      name: "News",
      icon: "../../images/news-logo.svg",
    },
    {
      to: "/management/deadline",
      className: true ? "active" : "inactive",
      name: "Deadline",
      icon: "../../images/deadlines-logo.svg",
    },
    {
      to: "/management/policy",
      className: true ? "active" : "inactive",
      name: "Policy",
      icon: "../../images/policies-logo.svg",
    },

    {
      to: "/posts",
      className: true ? "active" : "inactive",
      name: "Post",
      icon: "../../images/courses-logo.svg",
    },
    {
      to: "/management/courses",
      className: true ? "active" : "inactive",
      name: "Courses",
      icon: "../../images/courses-logo.svg",
    },
    {
      to: "/management/faculty",
      className: true ? "active" : "inactive",
      name: "Faculty",
      icon: "../../images/courses-logo.svg",
    },
    {
      to: "/logout",
      className: true ? "active" : "inactive",
      name: "Logout",
      icon: "../../images/logout-logo.svg",
    },
  ];

  return (
    <>
      <button className="ham-btn w-20 absolute" onClick={toggleSidebar}>
        {boxStyle.width === "80px" ? (
          <FaBars className="content-center w-14 h-14 z-50" />
        ) : (
          <img src={cross} className=" cross white w-8 h-8 z-50" />
        )}
      </button>

      <div className="navbar-main container h-full" style={boxStyle} ref={box}>
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
            <div>
              <ul className="container d-flex flex-column align-items-start gap-1 ul-contain">
                {dashboardMenu.map((value, index) => {
                  return (
                    <Navitem
                      to={value.to}
                      className={value.className}
                      name={value.name}
                      icon={value.icon}
                      key={index}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar_faculty;
