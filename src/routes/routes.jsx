import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layouts/Main";
import ErrorPage from '../components/ErrorPage/ErrorPage'
import Registration from "../components/Auth/Registration";
import Login from "../components/Auth/Login";
import ForgetPassword from "../components/Auth/ForgetPassword";
import NotForLoggedInUser from "./NotForLoggedInUser";
import Courses from "../components/Courses/Courses";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
            },
            {
                path: '/registration',
                element: <NotForLoggedInUser><Registration></Registration></NotForLoggedInUser>
                ,
            },
            {
                path: '/login',
                element: <NotForLoggedInUser><Login></Login></NotForLoggedInUser>,
            },
            {
                path: '/forget-password',
                element: <NotForLoggedInUser><ForgetPassword></ForgetPassword></NotForLoggedInUser>,
            },
        ]
    }
])