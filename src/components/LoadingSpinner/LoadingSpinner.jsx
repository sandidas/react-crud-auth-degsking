import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const LoadingSpinner = ({ children }) => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const location = useLocation();
    console.log(loading);
    if (loading) {
        return (
            <div>
                <div className="flex items-center justify-center space-x-2 min-h-[200px]">
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                </div>
            </div>
        )
    } else {
        setLoading(false);
        return children;
    }
};

export default LoadingSpinner;