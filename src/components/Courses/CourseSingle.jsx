import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseSingle = () => {
    const course = useLoaderData();
    return (
        <div className="flex flex-col max-w-5xl mx-auto overflow-hidden rounded">
            <img src={course.image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500 rounded-lg shadow-lg" />
            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-6xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900 dark:text-white bg-white text-dark shadow-md">
                <div className="space-y-2">
                    <div className="inline-block text-2xl font-semibold sm:text-3xl">
                        {course.title}

                    </div>
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