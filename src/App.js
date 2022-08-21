import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from '@/components/layouts/MainLayout';
import AuthLayout from "@/components/layouts/AuthLayout";
import Home from '@/components/Home';
import About from '@/components/About';
import Login from '@/components/Login';
import SignUp from '@/components/Signup';


function App(props) {
    return (
            <div className="App">
                <h1>React Router Example</h1>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="about" element={<About />}/>
                    </Route>

                    <Route element={<AuthLayout/>}>
                        <Route path="login" element={<Login/>}/>
                        <Route path="signup" element={<SignUp />}/>
                    </Route>

                </Routes>
             </div>
        );
}

export default App;