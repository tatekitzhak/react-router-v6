import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link, NavLink, Outlet } from 'react-router-dom';
import { header_menu } from '@/utils/menu';
import HeaderNavList from '@/component/pages/HeaderNavList';

function Home(props) {
    return (
        <div>
            Home
        </div>
    );
}
function About(props) {
    return (
        <div>
            About
        </div>
    );
}
function Topics(props) {
    return (
        <div>
            Topics
        </div>
    );
}
function Contact(props) {
    return (
        <div>
            Contact Us
        </div>
    );
}
function NotFound(props) {
    return (
        <div>
            NotFound
        </div>
    );
}
 

function Header(props) {
    
    return (
        <div>
            <HeaderNavList>
            Header
            </HeaderNavList>
            
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/topics' element={<Topics/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </div>
    );
}

export default Header;