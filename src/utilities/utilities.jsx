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
}