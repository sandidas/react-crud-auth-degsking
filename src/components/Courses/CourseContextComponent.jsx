import React, { useContext } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


export const CourseContext = createContext({})

const CourseContextComponent = ({ children }) => {
    const { loading, setLoading, showAlert } = useContext(AuthContext);


    const [courses, setCourses] = useState([]);



    const [countries, setCountries] = useState([]);
    // async practice
    const loadDatass = async () => {
        const url = `https://degsking-ass.vercel.app/courses`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setCourses(data);
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



    const courseInfo = { courses };
    return (
        <CourseContext.Provider value={courseInfo}>
            {
                loading ? <LoadingSpinner />
                    :
                    children
            }
            {/* {children} */}

        </CourseContext.Provider>
    );
};

export default CourseContextComponent;