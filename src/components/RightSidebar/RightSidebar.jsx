import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CourseContext } from '../Courses/CourseContextComponent';

const RightSidebar = () => {
    const { allCourse } = useContext(CourseContext);
    return (
        <div>
            <aside className="w-full p-6 dark:bg-gray-900 dark:text-gray-100 border dark:border-none bg-slate-100">
                <nav className="space-y-8 text-sm">
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Latest Courses </h2>
                        <div className="flex flex-col space-y-1">
                            {
                                // children.length
                                allCourse.map(course =>
                                    <Link to={`/course/details/${course.slug}`} className='w-full py-1 flex hover:text-purple-400 '>
                                        <div className='text-purple-400 pr-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                            </svg>
                                        </div>
                                        {
                                            course.title
                                        }
                                    </Link>
                                )

                            }
                        </div>
                    </div>
                </nav>
            </aside>
        </div>
    );
};

export default RightSidebar;