import React from "react"
import Sidebar_faculty from "../../SideBar/Sidebar-faculty"
import '../Faculty.css'

const FacultyBase = (props) => {
    return(
        <div className="main">
            <div className="right-side">
                { props.children }
            </div>
            <Sidebar_faculty/>
        </div>
    )
}

export default FacultyBase