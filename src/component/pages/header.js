import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { header_menu } from '@/utils/menu';
import HeaderNavList from '@/component/headerBarMenu/HeaderNavList';
import SideBarNavList from '@/component/sideBarMenu/SideBarNavList'

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

function Contact(props) {
    let params = useParams();
    console.log("Contact:",params)
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
function Topic(props) {
    let params = useParams();
    console.log("Topic:",props)
    return (
        <div>
            Topic
            <Outlet/>
        </div>
    );
}


function Header(props) {

    return (
        <>
            <HeaderNavList>
                Header
            </HeaderNavList>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='topics' element={<SideBarNavList />} >
                    <Route path="topic1" element={<Topic path={'topic1'}/>} />
                    <Route path="topic2" element={<Topic path={'topic2'}/>} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default Header;