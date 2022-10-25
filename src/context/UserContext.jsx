import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext({})

const UserContext = ({ children }) => {
    const [user, setUser] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(true);

    

    const authInfo = {user}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;