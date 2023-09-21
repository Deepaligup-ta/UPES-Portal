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

    const [clickDashboard, setClickedDashboard] = useState('false');
    const [clickPolicies, setClickedPolicies] = useState('false');
    const [clickTimetable, setClickedTimetable] = useState('false');
    const [clickSyllabus, setClickedSyllabus] = useState('false');
    const [clickAssessment, setClickedAssessment] = useState('false');
    const [clickBroadcast, setClickedBroadcast] = useState('false');
    const [clickCourses, setClickedCourses] = useState('false');
    const [clickCalender, setClickedCalender] = useState('false');
    const [clickAwardsheet, setClickedAwardsheet] = useState('false');
    const handleDashboard = () => {
        console.log('clicked');
        setClickedDashboard(!clickDashboard)
    }

    const handleCalender = () => {
        console.log('clicked');
        setClickedCalender(!clickCalender)
    }

    const handleCourses = () => {
        console.log('clicked');
        setClickedCourses(!clickCourses)
    }

    const handleBroadcast = () => {
        console.log('clicked');
        setClickedBroadcast(!clickBroadcast)
    }

    const handleTimetable = () => {
        console.log('clicked');
        setClickedTimetable(!clickTimetable)
    }

    const handlePolicies = () => {
        console.log('clicked');
        setClickedPolicies(!clickPolicies)
    }

    const handleSyllabus = () => {
        console.log('clicked');
        setClickedSyllabus(!clickSyllabus)
    }

    const handleAssessment = () => {
        console.log('clicked');
        setClickedAssessment(!clickAssessment)
    }

    const handleAwardsheets = () => {
        console.log('clicked');
        setClickedAwardsheet(!clickAwardsheet)
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
                        <div className="panel" onClick={handleDashboard}>
                            <img src="./images/dashboard-logo.svg" alt="dashboard-logo" />
                            <label>Dashboard</label>
                        </div>
                        <div className="panel" onClick={handleCalender}>
                            <img src="./images/calendar-logo.svg" alt="calendar logo" />
                            <h4 >Calendar</h4>
                        </div>
                        <div className="panel" onClick={handleCourses}>
                            <img src="./images/courses-logo.svg" alt="courses logo" />
                            <h4>Courses</h4>
                        </div>
                        <div className="panel"  onClick={handleBroadcast}>
                            <img src="./images/broadcast.svg" alt="broadcast messages" />
                            <h4>Broadcast Messages</h4>
                        </div>
                        <div className="panel" onClick={handleTimetable}>
                            <img src="./images/timetable-logo.svg" alt="timetable logo" />
                            <h4>Timetable</h4>
                        </div>
                        <div className="panel" onClick={handlePolicies}>
                            <img src="./images/policies-logo.svg" alt="policies" />
                            <h4>Policy</h4>
                        </div>
                        <div className="panel" onClick={handleSyllabus}>
                            <img src="./images/syllabus-logo.svg" alt="syllabus" />
                            <h4>Syllabus</h4>
                        </div>
                        <div className="panel" onClick={handleAssessment}>
                            <img src="./images/internal_assessment.svg" alt="internal assessment" />
                            <h4>Internal Assessments</h4>
                        </div>
                        <div className="panel" onClick={handleAwardsheets}>
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
                {clickDashboard ? <Dashboard /> : false}
                {clickPolicies ? <Policies /> : false}
                {clickCalender ? <Calender /> : false}
                {clickTimetable ? <Timetable /> : false}
                {clickSyllabus ? <Syllabus /> : false}
                {clickAwardsheet ? <Awardsheets /> : false}
                {clickCourses ? <Courses /> : false}
                {clickAssessment ? <Assessment /> : false}
                {clickBroadcast ? <Broadcast /> : false}

            </div>
        </div>
    )
};

export default Faculty;