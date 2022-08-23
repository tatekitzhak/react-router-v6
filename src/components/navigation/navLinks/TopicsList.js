import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

function TopicsList(props) {
    return (
        <nav>
            <ul>
                <li>
                <NavLink to="topic-1">Topic 1</NavLink>
                </li>
                <li>
                <NavLink to="topic-2">Topic 2</NavLink>
                </li>
                <li>
                <NavLink to="topic-3">Topic 3</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default TopicsList;