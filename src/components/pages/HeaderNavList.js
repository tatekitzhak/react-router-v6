import React from 'react';
import { NavLink } from "react-router-dom";
import { header_menu } from '@/utils/menus';

function HeaderNavList(props) {
    // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
//   console.log('HeaderNavList:',header_menu)
  return (
    <nav className="HeaderNavList">
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
            className={({ isActive }) => {
              return isActive ? activeClassName : undefined}
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="topics"
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Topics
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="contact"
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            >
          Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavList;