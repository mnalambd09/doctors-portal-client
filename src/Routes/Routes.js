import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Home from "../Pages/Home/Home";
import Footer from "../Pages/Home/Shared/Footer/Footer";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    }
])

export default router;