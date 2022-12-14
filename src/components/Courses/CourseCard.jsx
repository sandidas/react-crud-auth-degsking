import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    return (
        <div>
            <div className="rounded-md shadow-md border dark:border-none dark:bg-gray-900 dark:text-gray-100">
                <Link to={`/course/details/${course.slug}`}>
                    <img src={course.thumb} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 hover:opacity-50" />
                </Link>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2  min-h-[120px]">
                        <Link className="text-xl font-semibold tracking-wide" to={`/course/details/${course.slug}`}>

                            <h2>{course.title}</h2>

                        </Link>
                        <div className="dark:text-gray-100">
                            {course.short_description}

                        </div>
                    </div>
                    <Link to={`/course/details/${course.slug}`} className="flex items-center justify-center w-full p-4 my-2 space-x-4  rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-purple-800 hover:text-white bg-purple-600 text-white">Read more</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;