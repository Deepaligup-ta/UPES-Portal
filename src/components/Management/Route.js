import React from 'react'
import Sidebar_faculty from '../SideBar/Sidebar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ManagementDashboard from './management_dashboard/dashboard';
import Home from '../home/Home';


const Management_Route = () => {
  return (
    <div>
        <Sidebar_faculty/>
    

        
    </div>
  )
}

export default Management_Route;