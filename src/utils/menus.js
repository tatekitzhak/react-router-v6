import React from "react";
import Topic from '@/components/navigation/navLinks/Topic';
import TopicsList from '@/components/navigation/navLinks/TopicsList';
import TopicsDashboard from '@/components/navigation/navLinks/TopicsDashboard';
import Subtopic from '@/components/navigation/navLinks/Subtopic';
import Article from '@/components/pages/Article';
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
  { path: "/", element: <TopicsDashboard />},
  { path: "topic-1", element: <Topic topic={"Topic-1"} /> ,
    children: [
      { path: "subtopic-1", element: <Subtopic path={"subtopic-1"}/>,
        children: [
          { path: "article-1", element: <Article> <div>article 1</div> </Article>},
          { path: "article-2", element: <Article> <div>article 2</div> </Article>},
          { path: "article-3", element: <Article> <div>article 3</div> </Article>}
        ], 
      },
      { path: "subtopic-2", element: <Subtopic path={"subtopic-2"}/>,
        children: [
          { path: "article-1", element: <Article><div>article 1</div></Article>},
          { path: "article-2", element: <Article> <div>article 2</div></Article>},
          { path: "article-3", element: <Article> <div>article 3</div> </Article>}
        ], 
      },
      { path: "subtopic-3", element: <Subtopic path={"subtopic-3"}/>,
        children: [
          { path: "article-1", element: <Article><div>article 1</div></Article>},
          { path: "article-2", element: <Article> <div>article 2</div></Article>},
          { path: "article-3", element: <Article> <div>article 3</div> </Article>}
        ], 
      },
    ], 
  },
  
  { path: "topic-2", element: <Topic topic={"Topic-2"}/>,
    children: [
      { path: "subtopic-1", element: <Subtopic path={"subtopic-1"}/>,
        children: [
          { path: "article-1", element: <Article> <div>article 1</div> </Article>},
          { path: "article-2", element: <Article> <div>article 2</div> </Article>},
          { path: "article-3", element: <Article> <div>article 3</div> </Article>}
        ],
      },
      { path: "subtopic-2", element: <Subtopic path={"subtopic-2"}/>,
        children: [
          { path: "article-1", element: <Article> <div>article 1</div> </Article>},
          { path: "article-2", element: <Article> <div>article 2</div> </Article>},
          { path: "article-3", element: <Article> <div>article 3</div> </Article>}
        ],
       },
      { path: "subtopic-3", element: <Subtopic path={"subtopic-3"}/>,
        children: [
          { path: "article-1", element: <Article> <div>article 1</div> </Article>},
          { path: "article-2", element: <Article> <div>article 2</div> </Article>},
          { path: "article-3", element: <Article> <div>article 3</div> </Article>}
        ],
      },
    ], 
  },
  {
    path: "topic-3",element: <Topic topic={"Topic-3"} />,
    children: [
      { path: "subtopic-1", element: <Subtopic path={"subtopic-1"}/>,
        children: [
          { path: "article-1", element: <Article> <div>article 1</div> </Article>},
          { path: "article-2", element: <Article> <div>article 2</div> </Article>},
          { path: "article-3", element: <Article> <div>article 3</div> </Article>}
        ], 
      },
      { path: "subtopic-2", element: <Subtopic path={"subtopic-2"}/>,
        children: [
          { path: "article-1", element: <Article> <div>article 1</div> </Article>},
          { path: "article-2", element: <Article> <div>article 2</div> </Article>},
          { path: "article-3", element: <Article> <div>article 3</div> </Article>}
        ], 
      },
      { path: "subtopic-3", element: <Subtopic path={"subtopic-3"}/>,
        children: [
          { path: "article-1", element: <Article> <div>article 1</div> </Article>},
          { path: "article-2", element: <Article> <div>article 2</div> </Article>},
          { path: "article-3", element: <Article> <div>article 3</div> </Article>}
        ],
      },
    ],
  }, 
  {
    path: "*",element: <NotFound /> 
  }, 
];


export function useRoutesNestedElement(){
  const routes = [
    { path: "/", element: <TopicsDashboard />,},
    { path: "topic-1", element: <Topic topic={"Topic-1"} />,
      children: [
        { path: "subtopic-1", element: <Subtopic path={"subtopic-1"}/>,
          children: [
            { path: "article-1", element: <Article><div>article 1</div></Article>}
          ], 
        },
        { path: "subtopic-2", element: <Subtopic path={"subtopic-2"}/>,
          children: [
            { path: "article-2", element: <Article><div>article 2</div></Article>}
          ], 
        },
        { path: "subtopic-3", element: <Subtopic path={"subtopic-3"}/>,
          children: [
            { path: "article-3", element: <Article><div>article 3</div></Article>}
          ], 
        },
      ], 
    },
    {
      path: "*",element: <NotFound /> 
    }, 
  ]
  console.table( routes)

  for(const k1 in routes) {
    if(typeof routes[k1] === 'object') {
      for(const k2 in routes[k1]) {
        const parent = routes[k1][k2];
        console.log(`Parent ${k1}:`,parent); // Assign the [ path: " ", element: <Topic topic={""} /> ]
        if( parent.constructor === Array ){
          for(const k3 in parent) {
            console.log(`children1 ${k3}:`,parent[k3].path, parent[k3].element); // Assign the [path: "", element: <Subtopic path={"subtopic-3"}/>]
            const children3 = parent[k3][k2]
            if(parent.constructor === Array){
              for(const k4 in children3)
              console.log(`children2 ${k4}:`,children3[k4].path, children3[k4].element); // Assign the [path: "", element: <Article><div>article 3</div></Article>]
            }
            
          }
        }
        
      }
    } else {
      console.log(`not object ${key}:`,routes[key]);
    }
  }
}