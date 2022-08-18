import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { header_menu, sidebar_menu } from '@/utils/menus';
import HeaderNavList from '@/components/headerBarMenu/HeaderNavList';
import SideBarNavList from '@/components/sideBarMenu/SideBarNavList'
import Home from '@/components/pages/home';
import About from '@/components/pages/About';
import Contact from '@/components/pages/Contact';
import NotFound from '@/components/pages/NotFound';


function Topic(props) {
    let params = useParams();
    console.log("Topic:",props.path)
    return (
        <div>
            {props.path}
            <Outlet/>
        </div>
    );
}
function Topics(props) {
    console.log("Topics List:", props.path)
    return (
      <div>
          {props.path}
      </div>
    );
  }


function Header(props) {
    let {params} = useParams();
    console.log("Header:", params)
    return (
        <>
            <HeaderNavList>
                Header
            </HeaderNavList>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='topics' element={<SideBarNavList path='Topic List' />} >

                    <Route index element={<Topics data={ sidebar_menu }  path={'Topic List'}/>} />
                    <Route path="topic1" element={<Topic path={'Topic 1'}/>} />
                    <Route path="topic2" element={<Topic path={'Topic 2'}/>} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default Header;