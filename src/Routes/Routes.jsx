
import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Order/Shop";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
       {
        path:'/',
        element:<Home></Home>
       },
       {
        path:"/menu",
        element:<Menu></Menu>
       },
       {
        path:"/shop/:category",
        element:<Shop></Shop>
       },
       {
        path:"/login",
        element:<Login></Login>
       },
       {
        path:"/registration",
        element:<Registration></Registration>
       },
       
    ]
  },
]);