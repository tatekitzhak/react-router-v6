import React, { useState, useEffect } from "react";
import { useRoutes, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import TopicsDashboard from '@/components/navigation/navLinks/TopicsDashboard';
import Topic from '@/components/navigation/navLinks/Topic';
import TopicsList from '@/components/navigation/navLinks/TopicsList';
import Subtopic from '@/components/navigation/navLinks/Subtopic';
import NotFound from '@/components/pages/NotFound';

import { getTopics } from '@/store/actions/topics';
import { getSubtopics } from '@/store/actions/subtopics';
import { getArticles } from '@/store/actions/article';

function TopicsRouter(props){
  const dispatch = useDispatch()
  const [authenticated, setAuthenticated] = useState(false);
  const routes = props.routes; 
  
   let childrenElement = useRoutes(authenticated ? routes : []);
  /* let element = useRoutes([
    { path: "/", element: <TopicsDashboard {...props}/>,},
    { path: "topic-1", element: <Topic topic={"Topic-1"} />,
      children: [
        { path: "subtopic-1", element: <Subtopic path={"subtopic-1"}/> },
        { path: "subtopic-2", element: <Subtopic path={"subtopic-2"}/> },
      ], 
    },
    
    { path: "topic-2", element: <Topic topic={"Topic-2"}/>,
      children: [
        { path: "subtopic-1", element: <Subtopic path={"subtopic-1"}/> },
        { path: "subtopic-2", element: <Subtopic path={"subtopic-2"}/> },
      ], 
    },
    {
      path: "topic-3",element: <Topic topic={"Topic-3"} />,
      children: [
        { path: "subtopic-1", element: <Subtopic path={"subtopic-1"}/> },
        { path: "subtopic-2", element: <Subtopic path={"subtopic-2"}/> },
      ],
    }, 
    {
      path: "*",element: <NotFound /> 
    }, 
  ]); */

  useEffect(() => {
    dispatch( getTopics() );
    dispatch( getSubtopics() );
    dispatch( getArticles() );
    
      setAuthenticated(true);
    
  }, [dispatch]);

  return (
    <div>
       
      <TopicsList/>
      
      {childrenElement}
      <h3>Recommended content ...</h3>
    </div>
  );
};

export default TopicsRouter;
