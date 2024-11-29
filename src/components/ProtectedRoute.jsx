import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

const ProtectedRoute = () => {
    const token = localStorage.getItem('token');

    return token ? <Home /> : <Navigate to="login" />
}

export default ProtectedRoute