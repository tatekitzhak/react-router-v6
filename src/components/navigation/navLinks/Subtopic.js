import React from 'react';
import { useSearchParams, useLocation, NavLink , useParams, Outlet} from 'react-router-dom';

function Subtopic(props) {
    const [searchParams] = useSearchParams();
    let location = useLocation();
    const params = useParams();
  console.log("Subtopic params:",location, params); 
    return (
        <>
            <div>
                <h2>Title name: {props.path}</h2>
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
                <Outlet/>
            </div>
        </>
    );
}

export default Subtopic;