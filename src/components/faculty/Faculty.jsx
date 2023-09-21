import React from "react";
import { useState } from "react";
import './Faculty.css'
import Calender from "../../Pages/Calender";
import Dashboard from "../../Pages/Dashboard";
import Policies from "../../Pages/Policies";
import Syllabus from "../../Pages/Syllabus";
import Awardsheets from "../../Pages/Awardsheets";
import Broadcast from "../../Pages/Broadcast";
import Courses from "../../Pages/Courses";
import Assessment from "../../Pages/Assessment";
import Timetable from "../../Pages/Timetable";

const Faculty = () => {

    const [click,setClick]= useState("dashboard");

    const handleClick = (prop)=>{
        console.log('clicked');
        setClick(prop);
    }
    return (
        <div className="main">
            <div className="side-nav">
                <div className="logo">
                    <div className="upes">
                        <img src="./images/upesfull.png" alt="upes-logo" />
                    </div>
                </div>
                <div className="upper">
                    <div className="panels">
                        <div className="panel" onClick={()=>{handleClick("dashboard")}}>
                            <img src="./images/dashboard-logo.svg" alt="dashboard-logo" />
                            <label>Dashboard</label>
                        </div>
                        <div className="panel" onClick={()=>{handleClick("calender")}}>
                            <img src="./images/calendar-logo.svg" alt="calendar logo" />
                            <h4 >Calendar</h4>
                        </div>
                        <div className="panel" onClick={()=>{handleClick("courses")}}>
                            <img src="./images/courses-logo.svg" alt="courses logo" />
                            <h4>Courses</h4>
                        </div>
                        <div className="panel"  onClick={()=>{handleClick("broadcast")}}>
                            <img src="./images/broadcast.svg" alt="broadcast messages" />
                            <h4>Broadcast Messages</h4>
                        </div>
                        <div className="panel" onClick={()=>{handleClick("timetable")}}>
                            <img src="./images/timetable-logo.svg" alt="timetable logo" />
                            <h4>Timetable</h4>
                        </div>
                        <div className="panel" onClick={()=>{handleClick("policies")}}>
                            <img src="./images/policies-logo.svg" alt="policies" />
                            <h4>Policy</h4>
                        </div>
                        <div className="panel" onClick={()=>{handleClick("syllabus")}}>
                            <img src="./images/syllabus-logo.svg" alt="syllabus" />
                            <h4>Syllabus</h4>
                        </div>
                        <div className="panel" onClick={()=>{handleClick("assessment")}}>
                            <img src="./images/internal_assessment.svg" alt="internal assessment" />
                            <h4>Internal Assessments</h4>
                        </div>
                        <div className="panel" onClick={()=>{handleClick("awardSheets")}}>
                            <img src="./images/award_sheets.svg" alt="award sheets" />
                            <h4>Award Sheets</h4>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="panel">
                            <img src="./images/logout-logo.svg" alt="logout-logo" />
                            <h4>LOGOUT</h4>
                        </div>
                    </div>
                </div>
            </div>


            <div className="right-side">
                {click === 'dashboard' && <Dashboard />}
                {click === 'calender' && <Calender />}
                {click === 'courses' && <Courses />}
                {click === 'broadcast' && <Broadcast />}
                {click === 'timetable' && <Timetable />}
                {click === 'policies' && <Policies />}
                {click === 'syllabus' && <Syllabus />}
                {click === 'assessment' && <Assessment />}
                {click === 'awardSheets' && <Awardsheets />}

            </div>
        </div>
    )
};

export default Faculty;