import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layouts/Main";
import ErrorPage from '../components/ErrorPage/ErrorPage'
import Registration from "../components/Auth/Registration";
import Login from "../components/Auth/Login";
import ForgetPassword from "../components/Auth/ForgetPassword";
import NotForLoggedInUser from "./NotForLoggedInUser";
import { loadIndividualCourse } from "../utilities/utilities";
import CourseSingle from "../components/Courses/CourseSingle";
import CourseContextComponent from "../components/Courses/CourseContextComponent";
import Courses from "../components/Courses/Courses";
import CourseSingleCheckout from "../components/PrivateRoute/CourseSingleCheckout";
import PrivateRoute from "./PrivateRoute";


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
                element: <CourseContextComponent> <Courses></Courses> </CourseContextComponent>,
                // loader: () => fetch('https://degsking-ass.vercel.app/courses')
            },
            {
                path: '/course/details/:id',
                loader: ({ params }) => loadIndividualCourse(`${params.id}`),
                element: <CourseContextComponent> <CourseSingle></CourseSingle> </CourseContextComponent>,

            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => loadIndividualCourse(`${params.id}`),
                element: <PrivateRoute>  <CourseSingleCheckout></CourseSingleCheckout></PrivateRoute>,

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