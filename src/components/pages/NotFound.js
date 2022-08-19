import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link, NavLink, Outlet, useParams } from 'react-router-dom';

function NotFound(props) {
    let params = useParams();
    console.log("NotFound:",params)
    return (
        <div>
            NotFound
        </div>
    );
}

export default NotFound;