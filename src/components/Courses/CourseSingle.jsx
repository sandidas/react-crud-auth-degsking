import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseSingle = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-col max-w-5xl mx-auto overflow-hidden rounded">
                    <img src={course.image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-5xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900 bg-white text-dark shadow-md">
                        <div className="space-y-2">
                            <div className="inline-block text-2xl font-semibold sm:text-3xl">
                                {course.title}

                            </div>
                            <p className="text-xs dark:text-gray-400">By
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
                            </p>
                        </div>
                        <div className="dark:text-gray-100">
                            <p>{course.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSingle;