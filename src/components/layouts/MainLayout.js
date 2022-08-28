import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";

function MainLayout(props) {
    const [title, setTitle] = useState("MainLayout");
    console.log("MainLayout(props:", props)
    return (
        <>
            <nav className="nav-bar">
            <h1>MainLayout: {title}</h1>
                 <ul>
                     <li>
                         <Link to="/"> Home</Link>
                     </li>
                     <li>
                         <Link to="about"> About</Link>
                     </li>
                     <li>
                         <Link to="login"> Log In</Link>
                     </li>
                     <li>
                         <Link to="signup"> Sign Up</Link>
                     </li>
                 </ul>
            </nav>
            <div className="MainLayout">
            <Outlet context={{ setTitle }} />
            </div>
        </>
    );
}

export default MainLayout;