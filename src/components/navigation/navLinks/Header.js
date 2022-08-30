import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
function Header(props) {
    return (
        <header>
             <nav>
                <ul>
                    <li>
                        <NavLink to="/" end>
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                        About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/topics">
                        Topics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard">
                        Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/search">
                        Search
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/public">
                        Public Page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/invoices">
                        Invoices
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact" 
                            style={({isActive}) => ({color: isActive ? 'green' : 'black'})} 
                            className={({isActive}) => `nav_link${isActive ? " active" : ""}`} >Contact Us 
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;