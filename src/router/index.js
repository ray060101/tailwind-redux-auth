import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

import { createBrowserRouter } from "react-router-dom";
  
let router = createBrowserRouter([
    {
        path: "/",
        element : <Layout/>
    },
    {
        path: "/login",
        element : <Login/>
    },
    {
        path: "/register", 
        element: <Register />
    }

]);

export default  router
  
