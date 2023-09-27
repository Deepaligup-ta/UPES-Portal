import React from "react";
import './Home.css'
import Sidebar from "../SideBar/Sidebar";
import Management from "../Management/Management";

const Home = (props) => {
    return (
        <div className="main">

           
            <Management/>
            <Sidebar/>
            </div>
            
    )
};

export default Home;