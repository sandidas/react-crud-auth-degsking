import React, { useContext } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import RightSidebar from '../RightSidebar/RightSidebar';


export const CourseContext = createContext({})

const CourseContextComponent = ({ children }) => {
    const { loading, setLoading, showAlert } = useContext(AuthContext);
    const [allCourse, setAllCourse] = useState([]);
    // async practice
    const loadDatass = async () => {
        const url = `https://degsking-ass.vercel.app/courses`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setAllCourse(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            showAlert('danger', 'Data not found from API Call');
        }
    };

    useEffect(() => {
        setLoading(true);
        loadDatass();
    }, []);


    const courseInfo = { allCourse };
    return (
        <CourseContext.Provider value={courseInfo}>
            {
                loading ? <LoadingSpinner />
                    :

                    <div className='grid grid-cols-1 md:grid-cols-8 gap-5'>
                        <div className='md:col-span-5 xl:col-span-6'>
                            {children}
                        </div>
                        <div className='md:col-span-3 xl:col-span-2 h-fit sticky top-32'>
                            <RightSidebar></RightSidebar>
                        </div>

                    </div>


            }
        </CourseContext.Provider>
    );
};

export default CourseContextComponent;