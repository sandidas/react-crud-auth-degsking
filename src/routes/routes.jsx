import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layouts/Main";
import ErrorPage from '../components/ErrorPage/ErrorPage'

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
        ]
    }
])