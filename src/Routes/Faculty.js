import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { isFaculty } from '../Helper/Authentication'

const FacultyRoute = () => {
    let location = useLocation()
    
    let auth = isFaculty()
    if(auth)
        return <Outlet />
    else    
        return <Navigate to="/" />
}
export default FacultyRoute