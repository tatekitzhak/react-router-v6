import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link, NavLink, Outlet, useParams } from 'react-router-dom';


function Contact(props) {
    let params = useParams();
    console.log("Contact:",params)
    return (
        <div>
            Contact Us
        </div>
    );
}

export default Contact;