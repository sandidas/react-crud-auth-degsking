import React, { createContext, useEffect, useState } from 'react';
//import google firebase auth
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';
// React Hot Toast
import toast, { Toaster } from 'react-hot-toast';

export const AuthContext = createContext({})
const auth = getAuth(app); // call google firebase auth
const UserContext = ({ children }) => {
    const [user, setUser] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(true);




    const showAlert = (type, message) => {
        if (type == "error") {
            console.log("error");
            toast.error(message, {
                duration: 10000,
            });
        } else if (type == "success") {
            console.log("Success");
            toast.success(message, {
                duration: 10000,
            });

        } else if (type == "danger") {
            console.log("danger");
            toast(
                (t) => (
                    <div>
                        <span> {message} </span>
                    </div>
                ),
                {
                    duration: 15000,
                    icon: "😬",
                    style: {
                        background: "red",
                        color: "#fff",
                        fontSize: "17px",
                        fontWeight: "bold"
                    },
                },

            );
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
        setLoading(false);
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
    const authInfo = { createNewUser, logInbyEmailAndPassword, requestForgetPassword, user, successMessage, setSuccessMessage, errorMessage, setErrorMessage, userSignout, signinwithGoogle, loading, showAlert }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <Toaster />
        </AuthContext.Provider>
    );
};

export default UserContext;