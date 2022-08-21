import React from 'react';
import { Link, Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <>
            <nav className="nav-bar">
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
                <Outlet />
            </div>
        </>
    );
}

export default MainLayout;