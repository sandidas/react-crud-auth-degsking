import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseSingle = () => {
    const course = useLoaderData();
    return (
        <div className="flex flex-col rounded">



            <div className="p-5 pb-12 space-y-6 dark:bg-gray-900 dark:text-white bg-white text-dark
            border shadow-lg rounded-lg dark:border-none
            ">
                <h1 className="inline-block text-2xl font-semibold sm:text-3xl space-y-2">
                    {course.title}
                </h1>
                <div>
                    <img src={course.image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500 rounded-lg shadow-lg" />
                </div>



                <div className="dark:text-gray-100 ">
                    <div className='flex flex-col space-y-4' dangerouslySetInnerHTML={{ __html: course.description }}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSingle;