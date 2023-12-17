import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { getAuthToken } from '../Helper/Authentication'

const Check = () => {
    let location = useLocation()
    
    let auth = getAuthToken().user
    if(auth)
        return <Outlet />
    else    
        return <Navigate to="/" />
}
export default Check