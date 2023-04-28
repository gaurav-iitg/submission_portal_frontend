import React from 'react';
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRouteAdmin = ({children}) => {
    const token = localStorage.getItem('admin_token');
    let location = useLocation();
    if(!token) {
        return <Navigate to="/admin/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRouteAdmin;