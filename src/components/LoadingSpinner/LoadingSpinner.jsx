import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const LoadingSpinner = () => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div>
                <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                </div>
            </div>
        )
    } else {
        if (user && user.uid) {
            return children;
        } else {
            return <Navigate to='/login' state={{ from: location }} replace  ></Navigate>
        }
    }
};

export default LoadingSpinner;