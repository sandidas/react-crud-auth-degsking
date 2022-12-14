import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import { checkCurrentTheme, setCurrentTheme } from '../../utilities/utilities';
import { HiColorSwatch } from "react-icons/hi"; // Logo


const Header = () => {
    const { user, userSignout, showAlert } = useContext(AuthContext);
    const [theme, setTheme] = useState(false);
    const [mobNavigation, setMobNavigation] = useState(false);
    const navigate = useNavigate();

    const handleMobileNavigation = () => {
        setMobNavigation(!mobNavigation);
    }


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

            <header className="p-4 dark:bg-gray-900 dark:text-gray-100 bg-slate-100 top-0 sticky backdrop-blur-2xl transition-colors duration-500 z-50">
                <div className="flex justify-between h-16 mx-auto w-[90%]">
                    <Link to="/" aria-label="Back to homepage" className="flex items-center p-2 text-4xl font-extrabold">
                        <HiColorSwatch />
                        DegsKing
                    </Link>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <NavLink to="/home" className={({ isActive }) => (isActive ?
                                "flex items-center px-4 -mb-1 border-b-2 rounded-md font-medium dark:border-purple-700 dark:hover:bg-purple-600 dark:bg-slate-700 dark:text-white text-purple-800 bg-purple-200 hover:bg-purple-700 hover:text-white"
                                :
                                "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:bg-purple-700 hover:text-white rounded-md font-medium")} >
                                Home
                            </NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to="courses" className={({ isActive }) => (isActive ?
                                "flex items-center px-4 -mb-1 border-b-2 rounded-md font-medium dark:border-purple-700 dark:hover:bg-purple-600 dark:bg-slate-700 dark:text-white text-purple-800 bg-purple-200 hover:bg-purple-700 hover:text-white"
                                :
                                "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:bg-purple-700 hover:text-white rounded-md  font-medium")} >
                                Courses
                            </NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to="/blog" className={({ isActive }) => (isActive ?
                                "flex items-center px-4 -mb-1 border-b-2 rounded-md font-medium dark:border-purple-700 dark:hover:bg-purple-600 dark:bg-slate-700 dark:text-white text-purple-800 bg-purple-200 hover:bg-purple-700 hover:text-white"
                                :
                                "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:bg-purple-700 hover:text-white rounded-md  font-medium")} >
                                Blogs
                            </NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to="/faq" className={({ isActive }) => (isActive ?
                                "flex items-center px-4 -mb-1 border-b-2 rounded-md font-medium dark:border-purple-700 dark:hover:bg-purple-600 dark:bg-slate-700 dark:text-white text-purple-800 bg-purple-200 hover:bg-purple-700 hover:text-white"
                                :
                                "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:bg-purple-700 hover:text-white rounded-md  font-medium")} >
                                FAQ
                            </NavLink>
                        </li>
                    </ul>


                    {/* theme switch button  */}
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

                    {/* login/register buttons  */}

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
                                <div className="flex items-center p-2 space-x-4">
                                    {
                                        user?.photoURL ?
                                            <Link to='/profile'>
                                                <img src={user.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                                            </Link>
                                            :
                                            <Link to="/profile">
                                                <div className='px-5 py-3 rounded-full bg-red-800 font-bold'>
                                                    ?
                                                </div>
                                            </Link>

                                    }
                                    {
                                        user?.uid ?
                                            <div>
                                                <h2 className="text-lg font-semibold"> {user?.displayName} </h2>
                                                <span className="flex items-center space-x-1">
                                                    <NavLink to='/profile' className="text-xs hover:underline dark:text-gray-400">View profile</NavLink>
                                                </span>
                                            </div>
                                            : ""

                                    }

                                </div>

                                <button onClick={handleUserSignout} className="self-center px-8 rounded-md py-3 font-semibold focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-purple-800 hover:text-white bg-purple-600 text-white">Log Out</button>
                            </div>
                    }

                    <button className="p-4 lg:hidden" onClick={handleMobileNavigation}>
                        {!mobNavigation ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        }
                    </button>
                </div>
                {/* Mobile Navigation  */}
                <div className={mobNavigation ? 'relative' : 'hidden'} onClick={() => setMobNavigation(!mobNavigation)}>
                    <div className="fixed top-[100px] right-0  p-3 space-y-2 w-full z-50  dark:bg-gray-900 dark:text-gray-100 bg-gray-200">
                        <button className='p-3 flex' onClick={handleMobileNavigation}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg> <span className='px-3 text-red-600 font-bold'>Close</span>
                        </button>

                        <div className="flex items-center p-2 space-x-4">

                            {
                                user?.uid ?
                                    <div>
                                        {
                                            user?.photoURL ?
                                                <Link to='/profile'>
                                                    <img src={user.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                                                </Link>
                                                :
                                                <Link to="/profile">
                                                    <div className='px-5 py-3 rounded-full bg-red-800 font-bold'>
                                                        ?
                                                    </div>
                                                </Link>

                                        }
                                    </div>
                                    :
                                    ""
                            }

                            {
                                user?.uid ?
                                    <div>
                                        <h2 className="text-lg font-semibold"> {user?.displayName} </h2>
                                        <span className="flex items-center space-x-1">
                                            <NavLink to='/profile' className="text-xs hover:underline dark:text-gray-400">View profile</NavLink>
                                        </span>
                                    </div>
                                    : ""

                            }

                        </div>


                        <div className="divide-y divide-gray-700">
                            <ul className="pt-2 pb-4 space-y-2 text-sm">

                                <li className="dark:bg-gray-800 dark:text-gray-50">
                                    <NavLink to='/home'
                                        className={({ isActive }) => (isActive ?
                                            "flex items-center p-4 space-x-3 rounded-md font-bold text-purple-700 dark:text-yellow-400"
                                            :
                                            "flex items-center p-4 space-x-3 rounded-md")}>
                                        <span>Home</span>
                                    </NavLink>
                                </li>

                                <li className="dark:bg-gray-800 dark:text-gray-50">
                                    <NavLink to='/courses'
                                        className={({ isActive }) => (isActive ?
                                            "flex items-center p-4 space-x-3 rounded-md font-bold text-purple-700 dark:text-yellow-400"
                                            :
                                            "flex items-center p-4 space-x-3 rounded-md")}>
                                        <span>Courses</span>
                                    </NavLink>
                                </li>

                                <li className="dark:bg-gray-800 dark:text-gray-50">
                                    <NavLink to='/blog'
                                        className={({ isActive }) => (isActive ?
                                            "flex items-center p-4 space-x-3 rounded-md font-bold text-purple-700 dark:text-yellow-400"
                                            :
                                            "flex items-center p-4 space-x-3 rounded-md")}>
                                        <span>Blog</span>
                                    </NavLink>
                                </li>

                                <li className="dark:bg-gray-800 dark:text-gray-50">
                                    <NavLink to='/faq'
                                        className={({ isActive }) => (isActive ?
                                            "flex items-center p-4 space-x-3 rounded-md font-bold text-purple-700 dark:text-yellow-400"
                                            :
                                            "flex items-center p-4 space-x-3 rounded-md")}>
                                        <span>FAQ</span>
                                    </NavLink>
                                </li>



                            </ul>
                            <ul className="pt-4 pb-2 space-y-2 text-sm">
                                {
                                    user?.uid ?
                                        <li> <button className="flex items-center p-4 space-x-3 rounded-md" onClick={handleUserSignout} > Log Out </button> </li>
                                        :
                                        <>
                                            <li> <NavLink to='/login' className="flex items-center p-4 space-x-3 rounded-md"> Log In </NavLink> </li>
                                            <li> <NavLink to='/registration' className="flex items-center p-4 space-x-3 rounded-md"> Register </NavLink> </li>
                                        </>
                                }







                            </ul>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;