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

  function navList() {
    return header_menu.map((list, key) => {
      return (
        <nav key={key} className="HeaderNavList">
          <ul>
            <li className="navAside">
              <NavLink
                to={list.to}
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                {list.title}
              </NavLink>
            </li>
          </ul>
        </nav>)
    })
  }
  return (
    <header>
      {navList()}
    </header>
  );
}

export default HeaderNavList;