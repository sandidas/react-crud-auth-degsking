import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const NotForLoggedInUser = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            // view loading
            <div className="flex items-center justify-center space-x-2 min-h-screen">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
            </div>
        )

    } else {
        if (!user || !user.uid) {
            return children;
        } else {
            return <Navigate to='/home' state={{ from: location }} replace  ></Navigate>
        }
    }
};

export default NotForLoggedInUser;