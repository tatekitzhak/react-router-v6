import React from 'react';
import { NavLink, Outlet, useParams } from "react-router-dom";


function Topic(props){
    const { id } = useParams();
    console.log("props:",props, id)
    return (
      <div className="subtopic">
        <h1>{props.path}</h1>
        <ul>
          <li>
            <NavLink to="subtopic-1">Subtopic 1</NavLink>
          </li>
          <li>
            <NavLink to="subtopic-2">Subtopic 2</NavLink>
          </li>
        </ul>

        {/** The placeholder attribute */}
        <div className="Outlet">
          <Outlet />
        </div>
      </div>
    );
  };

export default Topic;