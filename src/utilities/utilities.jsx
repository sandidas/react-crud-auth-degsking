import React from 'react';
import { useContext } from 'react';
import UserContext from '../context/UserContext';







const utilities = () => {
    const {loading, setLoading } = useContext(UserContext);
    return (
        <div>

        </div>
    );
};


export const setCurrentTheme = (theme) => {
    localStorage.setItem('isDarkMode', theme)
}

export const checkCurrentTheme = () => {
    return localStorage.getItem('isDarkMode')
}



export const loadCourses = async () => {
    setLoading(true);
    const apiData = await fetch(`https://degsking-ass.vercel.app/courses`);
    const data = await apiData.json();
    return data;
    console.log(data);
}

export const loadIndividualCourse = async (id) => {
    const url = `https://degsking-ass.vercel.app/course/details/${id}`;
    try {
        // console.log('found', url);
        const apiSingleData = await fetch(url);
        const data = await apiSingleData.json();
        return data;
    } catch (error) {
        return false;
    }
}
export default utilities;