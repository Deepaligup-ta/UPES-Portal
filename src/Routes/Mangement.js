import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isManagement } from '../Helper/Authentication';

const MangementRoute = () => {
    let location = useLocation();

    let auth = isManagement()
    if(auth)
        return <Outlet />
    else    
        return <Navigate to="/" state={{ from: location}} />
};
export default MangementRoute;