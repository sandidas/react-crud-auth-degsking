import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from "../../../public/76616-programming.json"
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='dark:text-gray-100'>

            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <Player
                            src={animationData}
                            className=""
                            loop
                            autoplay
                        />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">A Platform
                            <span className="dark:text-violet-400"> That </span>Shines You
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">
                            You can learn programming without any programming-related degree. FREE OF COST.

                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to='/courses' className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Courses</Link>
                            <Link to='/blog' className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Blog</Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;