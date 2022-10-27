import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseSingleCheckout = () => {

    const course = useLoaderData();
    return (

        <div className='grid grid-cols-1 md:grid-cols-8 gap-5'>
            <div className='md:col-span-5 xl:col-span-6'>
                <div className="p-5 pb-12 space-y-6 dark:bg-gray-900 dark:text-white bg-white text-dark
border shadow-lg rounded-lg dark:border-none">

                    <h1 className="inline-block text-xl font-semibold sm:text-3xl space-y-2">
                        FREE CHECKOUT
                    </h1>




                </div>

            </div>
            {/* sidebar  */}
            <div className='md:col-span-3 xl:col-span-2 h-fit sticky top-32'>
                <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                    <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">ORDER SUMMERY </h2>
                    <div>
                        <img src={course.thumb} alt="" className="w-full dark:bg-gray-500 rounded-lg shadow-lg" />
                    </div>
                    <h2>{course.title}</h2>

                    <div className="space-y-1 text-right">
                        <p>Total amount:
                            <span className="font-semibold"> ${course.price} </span>
                        </p>
                        <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CourseSingleCheckout;