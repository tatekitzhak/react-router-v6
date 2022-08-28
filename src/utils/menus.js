import React from "react";
import Topic from '@/components/navigation/navLinks/Topic';
import TopicsList from '@/components/navigation/navLinks/TopicsList';
import TopicsDashboard from '@/components/navigation/navLinks/TopicsDashboard';
import Subtopic from '@/components/navigation/navLinks/Subtopic';
import NotFound from '@/components/pages/NotFound';

export const menu = [
  {
    icon: "",
    title: "Education",
    to: "education",
    path: "topic-1", 
    element: <Topic />,
    children: [
      {
        title: "Technical Analysis",
        to: "technical analysis",
        path: "topic-1", 
        element: <Topic />,
        children: [
          {
            title: "The Dow Theory",
            to: "thedowtheory",
            path: "topic-1", 
            element: <Topic />,
          }
        ]
      }
    ]
  }
];
export const topics = [
    {
      icon: "",
      title: "Education",
      to: "education",
      path: "topic-1", 
      element: <Topic />,
      children: [
        {
          title: "Technical Analysis",
          to: "technical analysis",
          path: "topic-1", 
          element: <Topic />,
        }
      ]
    }
  ];
export const routes = [
  { path: "/", element: <TopicsDashboard />,},
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
]