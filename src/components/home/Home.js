import React from "react";
import './Home.css'

const Home = (props) => {
    return (
        <div className="main">
            <div className="strip"></div>
            <div className="side-nav">
                <div className="logo">
                    <div className="upes">
                        <img src="./images/upesfull.png" alt="upes-logo" /></div>
                    <div className="photo">
                        <img src= "./images/profilephoto.png" alt="profile photo"/>
                        <h3>USERNAME</h3>
                    </div>
                </div>
                <div className="panels">
                    <div className="panel">
                    <img src="./images/dashboard-logo.svg" alt="dashboard-logo"/>
                    <label>Dashboard</label>
                    </div>
                    <div className="panel">
                    <img src="./images/timetable-logo.svg" alt="timetable-logo"/>
                    <label>TimeTable</label>
                    </div>
                    <div className="panel">
                        <img src="./images/news-logo.svg" alt="news-logo"/>
                        <label>News</label>
                    </div>
                    <div className="panel">
                        <img src = "./images/deadlines-logo.svg" alt="deadlines-logo"/>
                        <label>Deadlines</label>
                    </div>
                    <div className="panel">
                        <img src="./images/policies-logo.svg" alt="policies-logo" />
                        <label>Policies</label>
                    </div>
                    <div id="empty"/>
                    <div className="panel">
                        <img src="./images/logout-logo.svg" alt="logout-logo"/>
                        <label>LOGOUT</label>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;