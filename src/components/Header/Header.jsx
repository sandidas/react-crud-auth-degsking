import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import { checkCurrentTheme, setCurrentTheme } from '../../utilities/utilities';
import { HiColorSwatch } from "react-icons/hi"; // Logo


const Header = () => {
    const { user, userSignout, showAlert } = useContext(AuthContext);
    const [theme, setTheme] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const currentTheme = checkCurrentTheme();
        if (currentTheme) {
            setTheme(currentTheme);
        } else {
            if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
                setTheme('dark');
                setCurrentTheme('dark');
            } else {
                setTheme('light');
                setCurrentTheme('light');
            }
        }

    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])

    const handleThemeSwitch = () => {
        const currentTheme = checkCurrentTheme();
        if (currentTheme == 'dark') {
            setTheme('light');
            setCurrentTheme('light');
        } else {
            setTheme('dark');
            setCurrentTheme('dark');
        }
        // console.log(currentTheme);
        //  setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    const handleUserSignout = () => {
        userSignout()
            .then(() => {
                showAlert('success', 'Log out successfully')
                navigate('/login');
            })
            .catch((error) => {
                const errors = error.message + ' | ' + error.code;
                showAlert('error', errors);
                navigate('/');
            })

    }

    return (
        <>

            <header className="p-4 dark:bg-gray-900 dark:text-gray-100 bg-slate-100">
                <div className="container flex justify-between h-16 mx-auto w-[90%]">
                    <Link rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2 text-4xl font-extrabold">
                        <HiColorSwatch />
                        DegsKing
                    </Link>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <NavLink to="/home" className={({ isActive }) => (isActive ?
                                "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-purple-400 dark:border-violet-400 text-purple-800hover:bg-purple-700 hover:text-white rounded-md  font-medium"
                                :
                                "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:bg-purple-700 hover:text-white rounded-md font-medium")} >
                                Home
                            </NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to="courses" className={({ isActive }) => (isActive ?
                                "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-purple-400 dark:border-violet-400 text-purple-800 hover:bg-purple-700 hover:text-white rounded-md  font-medium"
                                :
                                "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:bg-purple-700 hover:text-white rounded-md  font-medium")} >
                                Courses
                            </NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to="/blog" className={({ isActive }) => (isActive ?
                                "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-purple-400 dark:border-violet-400 text-purple-800 hover:bg-purple-700 hover:text-white rounded-md  font-medium"
                                :
                                "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:bg-purple-700 hover:text-white rounded-md  font-medium")} >
                                Blogs
                            </NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to="/faq" className={({ isActive }) => (isActive ?
                                "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-purple-400 dark:border-violet-400 text-purple-800 hover:bg-purple-700 hover:text-white rounded-md  font-medium"
                                :
                                "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:bg-purple-700 hover:text-white rounded-md  font-medium")} >
                                FAQ
                            </NavLink>
                        </li>
                    </ul>
                    {
                        !user?.uid ?
                            // if id not found / not logged in
                            <div className="items-center flex-shrink-0 hidden lg:flex">
                                <Link to="/login" className="self-center px-8 py-2 mr-3 rounded-md font-semibold border-4 border-purple-500 hover:bg-purple-800 hover:border-purple-800 hover:text-white">Log In</Link>
                                <Link to="/registration" className="self-center px-8 rounded-md py-3 font-semibold focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-purple-800 hover:text-white bg-purple-600 text-white">Register</Link>
                            </div>
                            :
                            // ID found / logged in
                            <div className="items-center flex-shrink-0 hidden lg:flex gap-5">
                                {
                                    user?.photoURL ?
                                        // Photo found
                                        <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-gray-700 ring-offset-purple-800" src={user.photoURL} />
                                        :
                                        // photo not found
                                        <div className='px-5 py-3 rounded-full bg-red-800 font-bold'>
                                            ?
                                        </div>
                                }

                                <button onClick={handleUserSignout} className="self-center px-8 rounded-md py-3 font-semibold focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-purple-800 hover:text-white bg-purple-600 text-white">Log Out</button>
                            </div>
                    }

                    <button className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <button
                        onClick={handleThemeSwitch} >
                        {
                            theme === 'dark' ?
                                <div className='bg-white p-1 rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                </div>

                                :
                                <div className=' p-1 rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                    </svg>
                                </div>
                        }
                    </button>


                </div>
            </header>

        </>
    );
};

export default Header;