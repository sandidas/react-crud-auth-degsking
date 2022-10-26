import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const NotForLoggedInUser = ({ children }) => {
    const { user, loading, showAlert } = useContext(AuthContext);
    const location = useLocation();

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
            showAlert("error", "Logged In user not allow to login/register again")
            return <Navigate to='/home' state={{ from: location }} replace  ></Navigate>
        }
    }
};

export default NotForLoggedInUser;