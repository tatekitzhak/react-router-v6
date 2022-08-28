import React from 'react';
import { useSearchParams, useLocation, NavLink } from 'react-router-dom';

function Subtopic(props) {
    const [searchParams] = useSearchParams();
    let location = useLocation();
  console.log("Subtopic:",location); 
    return (
        <>
            <div>
                <h2>All subjects /{props.path}</h2>
                <ul>
                    <li>
                        <NavLink to="article-1">Article 1</NavLink>
                    </li>
                    <li>
                        <NavLink to="article-2">Article 2</NavLink>
                    </li>
                    <li>
                        <NavLink to="article-3">Article 3</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Subtopic;