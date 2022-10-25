import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const ForgetPassword = () => {
    const { requestForgetPassword, setSuccessMessage, setErrorMessage, successMessage, errorMessage } = useContext(AuthContext);

    const handleForgetpassword = event => {
        event.preventDefault();
        setErrorMessage(''); // make empty to remove history
        setSuccessMessage(''); // make empty to remove history
        const form = event.target;
        const email = form.email.value;
        requestForgetPassword(email)
            .then(result => {
                setSuccessMessage('Please check your email, We send an password reset link.');
                form.reset();
            })
            .catch(error => {
                const errors = error.message + ' | ' + error.code;
                setErrorMessage(errors);
                console.log('Why I am seeing this');
            });
    }



    return (
        <div>
            <div>

                <div className="min-h-screen my-5 flex flex-col  items-center">

                    <div className='max-w-md min-w-[70%] text-center'>
                        {
                            errorMessage &&
                            <div className="bg-gradient-to-r from-red-900 via-red-600 to-red-900 p-5 my-5 rounded-md font-medium text-white"> Error!  {errorMessage} </div>
                        }
                        {
                            successMessage &&
                            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5  my-5 rounded-md font-medium text-white"> Success!  {successMessage} </div>
                        }


                    </div>

                    <div className="min-w-[70%] flex flex-col p-6 rounded-md sm:p-10 dark:bg-gray-800 dark:text-gray-100 shadow-md shadow-slate-600">
                        <div className="mb-8 text-center">
                            <h1 className="my-3 text-4xl font-bold">Forget Password</h1>
                            <p className="text-sm dark:text-gray-400">Subit your email to reset your password</p>
                        </div>
                        <form onSubmit={(e) => handleForgetpassword(e)}
                            className="space-y-12 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm text-slate-400">Email address</label>
                                    <input type="email" name="email" id="email" placeholder="hello@sandipandas.net" className="w-full text-xl px-3 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                                </div>
                            </div>
                            <div className="space-y-2">

                                <button className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900 hover:bg-purple-700 hover:text-white">Request Reset Password</button>


                                <p className="px-6 text-sm text-center dark:text-gray-400">Don't Have an account yet?
                                    <Link rel="noopener noreferrer" to="/registration" className="hover:underline dark:text-violet-400"> Register Now</Link>.
                                </p>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;