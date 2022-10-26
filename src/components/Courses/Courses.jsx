import React from 'react';
import { useContext } from 'react';

import CourseCard from './CourseCard';
import { CourseContext } from './CourseContextComponent';


const Courses = () => {
    const { allCourse } = useContext(CourseContext);

    // console.log(allCourse);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
                allCourse.map(course =>
                    <CourseCard
                        key={course._id}
                        course={course}
                    >
                    </CourseCard>
                )
            }
        </div>
    );
};

export default Courses;