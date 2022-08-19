import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link, NavLink, Outlet, useParams, Navigate } from 'react-router-dom';

function TopicsList(props) {
    console.log("Topics List:", props)
    function navList() {
        return props.data.map((list, key) => {
          return (
            <nav key={key} >
              <ul style={{backgroundColor: '#0D284F', color: 'white'}}>
                <li >
                    {list.title}
                 
                </li>
              </ul>
            </nav>)
        })
      }
    return (
      <div style={{backgroundColor: '#0D284F', color: 'white'}}>
          {props.path}
          {navList()}
      </div>
    );
  }

  export default TopicsList;
