import React from "react";

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