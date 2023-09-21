import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../../assets/upesfull.png"
import './Sidebar.css'

import {faChartLine} from "react-icons/fa"
const Sidebar = () => {
    


    const box = useRef();
    const inBox = useRef();

    const [boxStyle, setBoxStyle] = useState({ width: "80px" });
    const [smallBoxStyle, setSmallBoxStyle] = useState({ transform: "translateX(0%)" })
    const [bigBoxStyle, setBigBoxStyle] = useState({ transform: "translateX(-50vw)" })
    const move = () => {
        setBoxStyle({ width: "max-content" });
        setSmallBoxStyle({ transform: "translateX(-100%)", position: "absolute" })
        setBigBoxStyle({ transform: "translateX(0%)" })
    }

    const backMove = () => {
        setBoxStyle({ width: "80px" });
        setSmallBoxStyle({ transform: "translateX(0%)", position: "relative" })
        setBigBoxStyle({ transform: "translateX(-50vw)" })


    }
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const [open22, setOpen22] = useState(true);

    const onOpenModal22 = () => setOpen22(true);
    const onCloseModal22 = () => setOpen22(false);
  
  return (
 <div className={`navbar-main container`} onMouseOver={move} style={boxStyle} onMouseLeave={backMove}>

                <div className='nav-vert-out' style={smallBoxStyle}>

                    <div className='navbar-vertical' >
                       
                        <span className='rotate-text-container'><h1 className='rotate-text' style={{ fontSize: '25px' }}>WELCOME TO UPES</h1></span>
                    </div>
                </div>
                <div className={`navbar-inner d-flex flex-column align-items-center justify-content-center`} style={bigBoxStyle}>
                    <div className='logo-img'>
                        <img src={logo} className='logo-new w-36 ml-20'></img>
                    </div>

                    <div className='list-items pt-20'>
                        <ul className='container d-flex flex-column align-items-start gap-1 ul-contain'>
                            <li><NavLink to="/Dashboard" onClick={backMove} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>                        <img src="./images/dashboard-logo.svg" alt="dashboard" />
 <span class="list-item-text">Dashboard</span></NavLink></li>
                            <li><NavLink to="/timetable" onClick={backMove} className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src="./images/timetable-logo.svg"  alt="timetable-logo"/><span class="list-item-text">Time Table</span></NavLink></li>
                            <li><NavLink to="/News" onClick={backMove} className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src="./images/news-logo.svg" alt="news-logo"/><span class="list-item-text">News</span></NavLink></li>
                            <li><NavLink to="/Deadlines" onClick={backMove} className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src="./images/deadlines-logo.svg" alt="deadlines-logo"/><span class="list-item-text">Deadlines</span></NavLink></li>
                            <li><NavLink to="/Policies" onClick={backMove} className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src="./images/policies-logo.svg" alt="policies-logo"/><span class="list-item-text">Policies</span></NavLink></li>
                            <li><NavLink to="/Logout" onClick={backMove} className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src="./images/logout-logo.svg" alt="logout-logo"/><span class="list-item-text">Logout</span></NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>  )
}

export default Sidebar