import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const NotForLoggedInUser = ({ children }) => {
    const { user, loading, showAlert } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'; // if old history location not found then default get home route

    if (loading) {
        return (
            // view loading
            <div className="flex items-center justify-center space-x-2 min-h-[200px] h-screen">
                <div className="w-4 h-4 rounded-full animate-pulse bg-purple-800 dark:bg-purple-300"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-purple-800 dark:bg-purple-300"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-purple-800 dark:bg-purple-300"></div>
            </div>
        )
    } else {
        if (!user || !user.uid) {
            return children;
        } else {
            showAlert("success", "Relocating Success.")
           return <Navigate to='/' state={{ from: location }} replace  ></Navigate>
        }
    }
};

export default NotForLoggedInUser;