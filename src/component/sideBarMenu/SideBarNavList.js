import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { header_menu } from '@/utils/menu';



function SideBarNavList(props) {
    let params = useParams();
    console.log("SideBarNavList:",params)
    let activeStyle = {
        textDecoration: "underline",
      };
    
      let activeClassName = "underline";
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <NavLink
                        to="topic1"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                        className={({ isActive }) => {
                        return isActive ? activeClassName : undefined}
                        }
                    >
                        Topic1
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="topic2"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                        className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                        }
                    >
                        Topic2
                    </NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
}

export default SideBarNavList;