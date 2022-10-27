import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const LoadingSpinner = () => {
    const { loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className="flex items-center justify-center space-x-2 min-h-[200px] h-screen">
                <div className="w-4 h-4 rounded-full animate-pulse bg-purple-800 dark:bg-violet-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-purple-800 dark:bg-violet-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-purple-800 dark:bg-violet-400"></div>
            </div>
        )
    } else {
        return <Navigate to='/login' state={{ from: location }} replace  ></Navigate>
    }
};

export default LoadingSpinner;