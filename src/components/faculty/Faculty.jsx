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
import Sidebar from "../SideBar/Sidebar";
import Sidebar_faculty from "../SideBar/Sidebar-faculty";

const Faculty = () => {

    const [click,setClick]= useState("dashboard");

    const handleClick = (prop)=>{
        console.log('clicked');
        setClick(prop);
    }
    return (
        <div className="main">
            


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
            <Sidebar_faculty/>
        </div>
    )
};

export default Faculty;