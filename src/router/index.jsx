import { createBrowserRouter } from "react-router-dom";

import Root from "../layout";

import Home from "../pages/home";
import ErrorPage from "../pages/errorPage";
import Task from "../pages/task";
import Login from "../pages/login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path: '/mytask',
                element: <Task/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
])