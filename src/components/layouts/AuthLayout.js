import React from 'react';
import { Link, Outlet } from "react-router-dom";

function AuthLayout(props) {
    return (
            <>
                <nav className="nav-bar">
                    <ul>
                        <li>
                            <Link to="login"> Log In</Link>
                        </li>
                        <li>
                            <Link to="signup"> Sign Up</Link>
                        </li>
                    </ul>
                </nav>
                <div className="AuthLayout">
                    <Outlet />
                </div>
            </>
        );
}

export default AuthLayout;