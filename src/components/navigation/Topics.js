import React from "react";
import { NavLink, useRoutes, Outlet, useParams } from "react-router-dom";
import Topic from '@/components/navigation/navLinks/Topic';
import TopicsList from '@/components/navigation/navLinks/TopicsList';
import NotFound from '@/components/pages/NotFound';

function Topics(props){
  let element = useRoutes([
    { path: "/", element: <Topic /> },
    { path: "topic-1", element: <Topic path={"topic-1"} {...props}/>,
      children: [
        { path: "subtopic-1", element: <Subtopic path={"subtopic-1"}/> },
        { path: "subtopic-2", element: <Subtopic path={"subtopic-2"}/> },
      ], 
    },
    
    { path: "topic-2", element: <Topic path={"topic-2"}/>,
      children: [
        { path: "subtopic-1", element: <Subtopic path={"subtopic-1"}/> },
        { path: "subtopic-2", element: <Subtopic path={"subtopic-2"}/> },
      ], 
    },
    {
      path: "topic-3",element: <Topic path={"topic-3"} />,
      children: [
        { path: "subtopic-1", element: <Subtopic path={"subtopic-1"}/> },
        { path: "subtopic-2", element: <Subtopic path={"subtopic-2"}/> },
      ],
    },
    
  ]);

  return (
    <div>
      <TopicsList/>
      {element}
    </div>
  );
};

function Subtopic(props){
  return(
    <>
      <div>
        <h3>{props.path} - Each topic branches off into subtopics</h3>
      </div>
    </>
  )
};

export default Topics;
