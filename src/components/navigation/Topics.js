import React from "react";
import { useRoutes } from "react-router-dom";
import Topic from '@/components/navigation/navLinks/Topic';
import TopicsList from '@/components/navigation/navLinks/TopicsList';
import Subtopic from '@/components/navigation/navLinks/Subtopic';

function Topics(props){
  let element = useRoutes([
    { path: "/", element: <TopicsList /> },
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

export default Topics;
