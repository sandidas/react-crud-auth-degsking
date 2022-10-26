import React from 'react';
import { useContext } from 'react';
import RightSidebar from '../RightSidebar/RightSidebar';
import CourseCard from './CourseCard';
import { CourseContext } from './CourseContextComponent';


const Courses = () => {
    const { courses } = useContext(CourseContext);

    // console.log(courses);
    return (
        <div className='grid grid-cols-1 md:grid-cols-8 gap-5'>
            <div className='min-h-screen md:col-span-5 xl:col-span-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {

                        courses.map(course =>
                            <CourseCard
                                key={course._id}
                                course={course}
                            >
                            </CourseCard>
                        )
                    }
                </div>
            </div>
            <div className='md:col-span-3 xl:col-span-2 h-fit sticky top-0'>
                <RightSidebar>
                    {courses}
                </RightSidebar>
            </div>
        </div>
    );
};

export default Courses;