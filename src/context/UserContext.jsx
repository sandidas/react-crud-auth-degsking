import React, { createContext, useEffect, useState } from 'react';
//import google firebase auth
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';
// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext({})
const auth = getAuth(app); // call google firebase auth
const UserContext = ({ children }) => {
    const [user, setUser] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(true);

    //====== SIgnin by Google
    const googleProvider = new GoogleAuthProvider();

    const signinwithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    //====== SIgnin by Form

    // create new user by g. firebase
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in 
    const logInbyEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // forget Password
    const requestForgetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    // sign out
    const userSignout = () => {
        setLoading(true);
        return signOut(auth);
    }

    // check user signed in or not 
    useEffect(() => {
        const unsSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
                console.log('auth State change', currentUser);
            } else {
                setUser({});
                setLoading(false);
                console.log('auth State change', user);
            }
        })
        // if user change/log out on any route
        return () => {
            unsSubscribe();
        }
    }, [])

    // pass this by context
    const authInfo = { createNewUser, logInbyEmailAndPassword, requestForgetPassword, user, successMessage, setSuccessMessage, errorMessage, setErrorMessage, userSignout, signinwithGoogle, loading, }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;