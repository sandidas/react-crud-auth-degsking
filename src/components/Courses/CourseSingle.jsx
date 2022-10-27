import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const CourseSingle = () => {
    const course = useLoaderData();
    const ref = React.createRef();
    return (
        <div className="flex flex-col rounded">
            <div>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}
                        className="self-center mx-2 mb-2 px-2 text-sm rounded-md py-1 focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-purple-800 hover:text-white bg-purple-600 text-white"

                    >Generate Pdf</button>}
                </Pdf>
            </div>
            <div ref={ref} className="p-5 pb-12 space-y-6 dark:bg-gray-900 dark:text-white bg-white text-dark
            border shadow-lg rounded-lg dark:border-none">


                <h1 className="inline-block text-2xl font-semibold sm:text-3xl space-y-2">
                    {course.title}
                </h1>

                <img src={course.image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500 rounded-lg shadow-lg" />




                <div className="dark:text-gray-100 ">
                    <div className='flex flex-col space-y-4' dangerouslySetInnerHTML={{ __html: course.description }}>

                    </div>
                </div>
            </div>
            <div>
                <Link to={`/checkout/${course.slug}`} className="self-center mx-2 mt-2 px-2 text-sm rounded-md py-1 focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-purple-800 hover:text-white bg-purple-600 text-white">Get premium access</Link>
            </div>

        </div>

    );
};

export default CourseSingle;