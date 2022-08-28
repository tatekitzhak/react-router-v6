import React from 'react';
import { NavLink, Outlet, useParams } from "react-router-dom";


function Topic(props){
    const { id } = useParams();
    console.log("Topic:",props,id)
    return (
      <div className="subtopic">
        
        {props.topic ? <h1>{props.topic}</h1> : null}
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