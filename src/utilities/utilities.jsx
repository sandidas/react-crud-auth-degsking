import { redirect } from "react-router-dom"

export const setCurrentTheme = (theme) => {
    localStorage.setItem('isDarkMode', theme)
}

export const checkCurrentTheme = () => {
    return localStorage.getItem('isDarkMode')
}

 

export const loadCourses = async () => {
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
        console.log("Not Found ", error);
    }
}