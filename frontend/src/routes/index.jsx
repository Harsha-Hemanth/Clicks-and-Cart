import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword'
import SignUp from '../pages/SignUp'
import Products from '../pages/Products'
import Orders from '../pages/Orders'
import AdminPanel from '../pages/AdminPanel'
import CategoryProducts from '../pages/CategoryProducts'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'

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
                path: "category-products/:category",
                element: <CategoryProducts/>
            },
            {
                path: "product/:id",
                element: <ProductDetails/>
            },
            {
                path: "cart",
                element: <Cart/>
            },
            {
                path: "admin-panel",
                element: <AdminPanel/>,
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