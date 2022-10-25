import React, { createContext, useEffect, useState } from 'react';
//import google firebase auth
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';
// React Hot Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext({})
const auth = getAuth(app); // call google firebase auth
const UserContext = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);




    const showAlert = (type, message) => {
        if (type == "success") {
            toast.success(message, {
                position: "bottom-left",
                autoClose: 8000,
                theme: "colored",
            });

        } else if (type == "danger") {
            toast.error(message, {
                position: "bottom-left",
                autoClose: 10000,
                theme: "colored",
            });
        } else {
            toast.warn(message, {
                position: "bottom-left",
                autoClose: 15000,
                theme: "colored",
            });
        }
    }
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
            } else {
                setUser({});
                setLoading(false);
            }
        })
        // if user change/log out on any route
        return () => {
            unsSubscribe();
        }
    }, [])

    // pass this by context
    const authInfo = { createNewUser, logInbyEmailAndPassword, requestForgetPassword, user, userSignout, signinwithGoogle, loading, showAlert, loading, setLoading }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer />
        </AuthContext.Provider>
    );
};

export default UserContext;