import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link, NavLink, Outlet, useParams, Navigate } from 'react-router-dom';
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
    console.log("Topics List:", props)
    function navList() {
        return props.data.map((list, key) => {
          return (
            <nav key={key} >
              <ul>
                <li >
                    {list.title}
                 
                </li>
              </ul>
            </nav>)
        })
      }
    return (
      <div>
          {props.path}
          {navList()}
      </div>
    );
  }


function App(props) {
    const [menu, setMenu] = useState(null);

    useEffect(() => {
/* 
      let user = localStorage.getItem("user");
      user && JSON.parse(user) ? setAuth(true) : setAuth(false);
       */
    }, []);
  
    useEffect(() => {
    //   localStorage.setItem("user", auth);
    }, [menu]);
  
    let {params} = useParams();
    return (
        <>
            <HeaderNavList>
                Header
            </HeaderNavList>

            <Routes>
                 {/* Routes for Header Nav Bar List (Routes for everyone ) */}
                <Route path={'/'} element={<Home />} />
                <Route path={'about'} element={<About />} />
                <Route path={'contact'} element={<Contact />} />
                <Route path={'page-not-found'} element={<NotFound />} />
                <Route path={"/:not_found"} 
                       element={<Navigate to={ menu ? "/" : '/page-not-found'}/>}
                />

                 {/* Routes for root topics nav list */}
                <Route path='topics' 
                       element={
                        sidebar_menu ? <SideBarNavList path='Topic List' /> :
                        <Navigate to="/about" replace={true} />
                        } > 
                         {/* <NotFound pageNotFound={"page Not Found"} /> */}

                    <Route index element={<Topics data={ sidebar_menu }  path={'Topic List'}/>} />
                    <Route path="topic1" element={<Topic path={'Topic 1'}/>} />
                    <Route path="topic2" element={<Topic path={'Topic 2'}/>} />
                    <Route path={":path"} element={<NotFound />} />
                </Route>
               
                
            </Routes>
        </>
    );
}

export default App;