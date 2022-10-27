import React from 'react';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Profile = () => {
    const { updateUserProfile, updateUserEmail, user, showAlert, setLoading } = useContext(AuthContext);
    const { label, register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const onSubmit = data => {

        const profile = {
            displayName: data.name,
            photoURL: data.photoURL
        }
        const profileEmail = data.email

        updateUserProfile(profile)
            .then(() => {
                handleEmailUpdate(profileEmail)
                showAlert('success', 'Success. Profile Updated');
            })
            .catch(error => {
                setLoading(false);
                const errors = error.message;
                showAlert('danger', errors);
            });
    };

    const handleEmailUpdate = (profileEmail) => {
        updateUserEmail(profileEmail)
            .then(() => {
                showAlert('success', 'Success. Email address Updated');
            })
            .catch(error => {
                setLoading(false);
                const errors = error.message;
                showAlert('danger', errors);
            });
    }

    return (
        <div className='grid grid-cols-8 mx-auto gap-5'>
            <div className='col-span-3 dark:bg-gray-900 dark:text-white bg-white text-dark
border shadow-lg rounded-lg dark:border-none flex justify-center items-center'>


                {
                    user?.photoURL ?
                        // Photo found
                        <img alt="" className="max-w-[80%] rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-gray-700 ring-offset-purple-800" src={user.photoURL} />
                        :
                        // photo not found

                        <div className='px-5 py-3 rounded-full bg-red-800 font-bold'>
                            ?
                        </div>
                }


            </div>
            <div className="p-5 pb-12 col-span-5 space-y-6 dark:bg-gray-900 dark:text-white bg-white text-dark
border shadow-lg rounded-lg dark:border-none">
                <h1 className="inline-block text-xl font-semibold sm:text-3xl space-y-2">  Profile </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* register your input into the hook by invoking the "register" function */}
                    <div>
                        <label htmlFor="name" className="text-sm text-slate-400">Full Name</label>
                        <input className='w-full text-xl px-3 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100' defaultValue={user.displayName} {...register("name")} />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm text-slate-400">Email</label>
                        <input className='w-full text-xl px-3 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100' defaultValue={user.email} {...register("email")} />
                    </div>
                    <div>
                        <label htmlFor="photoURL" className="text-sm text-slate-400">Photo URL</label>
                        <input className='w-full text-xl px-3 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100' defaultValue={user.photoURL} {...register("photoURL")} />
                    </div>
                    <input type="submit" className='flex items-center justify-center w-full p-4 my-2 space-x-4  rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-purple-800 hover:text-white bg-purple-600 text-white' />
                    {errors.exampleRequired && <span>This field is required</span>}
                </form>
            </div>
        </div>
    );
};

export default Profile;