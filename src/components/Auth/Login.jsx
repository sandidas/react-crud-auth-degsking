import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {

    const { logInbyEmailAndPassword, signinwithGoogle, showAlert, setLoading, signInWithGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'; // if old history location not found then default get home route

    const handleLogin = (event) => {
        event.preventDefault();
        // setErrorMessage(''); // make empty to remove history
        // setSuccessMessage(''); // make empty to remove history
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (!email || !password) {
            showAlert('error', "ERROR: You left empty field.");
            return
        }

        // console.log(email, password);
        logInbyEmailAndPassword(email, password)
            .then(result => {
                // console.log(result);
                const user = result.user;
                showAlert('success', "Logged in successfully.");
                form.reset();
                setLoading(false);
                navigate(from, { replace: true });

            })
            .catch(error => {
                setLoading(false);
                const errors = error.message;
                showAlert('danger', errors);
            })
    }
    // signin using google
    const handleGoogleSignin = () => {
        signinwithGoogle()
            .then((result) => {
                const user = result.user;
                showAlert('success', "Logged in successfully.");
                setLoading(false);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setLoading(false);
                const errors = error.message + ' | ' + error.code;
                showAlert('error', errors);
            });
    }
    // Sign in with github
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then((result) => {
                const user = result.user;
                showAlert('success', "Logged in successfully.");
                setLoading(false);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errors = error.message + ' | ' + error.code;
                showAlert('danger', errors);
            });
    }


    return (
        <div className="mx-auto md:max-w-2xl max-w-7xl flex flex-col p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 bg-gray-100 shadow shadow-slate-500 border-slate-700 bg-gray-100">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Login Now</h1>
                <p className="text-sm dark:text-gray-400">Login to access your account</p>
            </div>

            {/* Third Party Login */}

            <div className='my-5'>
                <button aria-label="Login with Google" onClick={handleGoogleSignin} className="flex items-center justify-center w-full p-4 my-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-purple-500 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Login with Google</p>
                </button>
                <button aria-label="Login with GitHub" onClick={handleGithubSignIn} className="flex items-center justify-center w-full p-4 my-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-purple-500 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                    </svg>
                    <p>Login with GitHub</p>
                </button>
            </div>
            {/* # Third Party Login */}

            <form onSubmit={(e) => handleLogin(e)}
                className="space-y-12 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm text-slate-400">Email address</label>
                        <input required type="email" name="email" id="email" placeholder="hello@sandipandas.net" className="w-full text-xl px-3 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm text-slate-400">Password</label>
                            <label htmlFor="password" className="text-sm text-yellow-600">
                                <Link className='hover:text-yellow-500 font-bold' to='/forget-password'>Forget Password</Link>
                            </label>
                        </div>
                        <input required type="password" name="password" id="password" placeholder="* * * * *" className="w-full text-xl px-3 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                    </div>
                </div>
                <div className="space-y-2">

                    <button className="flex items-center justify-center w-full p-4 my-2 space-x-4  rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-purple-800 hover:text-white bg-purple-600 text-white">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg> &nbsp;  Login</button>


                    <p className="px-6 text-sm text-center dark:text-gray-400">Don't Have an account yet?
                        <Link rel="noopener noreferrer" to="/registration" className="hover:underline dark:text-violet-400"> Register Now</Link>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;