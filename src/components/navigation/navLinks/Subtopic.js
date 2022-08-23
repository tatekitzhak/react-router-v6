import React from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

function Subtopic(props) {
    const [searchParams] = useSearchParams();
    let location = useLocation();
  console.log("Subtopic:",location); 
    return (
        <>
            <div>
                <h3>{props.path} - Each topic branches off into subtopics</h3>
            </div>
        </>
    );
}

export default Subtopic;