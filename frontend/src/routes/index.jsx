import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword'
import SignUp from '../pages/SignUp'
import Profile from '../pages/Profile'
import Products from '../pages/Products'
import Orders from '../pages/Orders'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "forgot-password",
                element: <ForgotPassword/>
            },
            {
                path: "sign-up",
                element: <SignUp/>
            },
            {
                path: "profile",
                element: <Profile/>,
                children: [
                    {
                        path: "products",
                        element: <Products/>
                    },
                    {
                        path: "orders",
                        element: <Orders/>
                    }
                ]
            }
        ]
    }
])

export default router