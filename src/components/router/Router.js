import React from 'react';
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import MainLayout from '@/components/layouts/MainLayout';
import AuthLayout from "@/components/layouts/AuthLayout";
import Home from '@/components/Home';
import About from '@/components/About';
import Login from '@/components/Login';
import SignUp from '@/components/Signup';
import PageNotFound from '@/components/PageNotFound';


function Router(props) {
    let element = useRoutes([
        {
            element: <MainLayout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "about", element: <About /> },
            ],
        },
        {
            element: <AuthLayout />,
            children: [
               { path: "login", element: <Login /> },
               { path: "signup", element: <SignUp /> },
               { path: ":id", element: <PageNotFound {...props} />},
            ],
        },
    ]);
    return element || <PageNotFound />;
}

export default Router;