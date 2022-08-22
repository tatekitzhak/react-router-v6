import React from "react";
import { NavLink, useRoutes, Outlet  } from "react-router-dom";
import TopicsList from '@/navigation/navLinks/TopicsList';
import NotFound from '@/components/pages/NotFound';

function Topics(){
  let element = useRoutes([
    { path: "topic-1", element: <Route1 /> },
    { path: "topic-2", element: <Route2 /> },
    {
      path: "topic-3",
      element: <Route3 />,
      children: [
        { path: "child1", element: <Child1 /> },
        { path: "child2", element: <Child2 /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <div>
      <TopicsList/>
      {element}
    </div>
  );
};

function Route1(){
  return(
    <>
      <div>
        <h1>Route1</h1>
      </div>
    </>
  )
};
function Route2(){
  return(
    <>
      <div>
        <h1>Route2</h1>
      </div>
    </>
  )
};

function Route3(){
  return (
    <div>
      <h1>Route3</h1>
      <ul>
        <li>
          <NavLink to="child1">Child1</NavLink>
        </li>
        <li>
          <NavLink to="child2">Child2</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

function Child1(){
  return(
    <>
      <div>
        <h1>Child1</h1>
      </div>
    </>
  )
};
function Child2(){
  return(
    <>
      <div>
        <h1>Child2</h1>
      </div>
    </>
  )
};

export default Topics;
