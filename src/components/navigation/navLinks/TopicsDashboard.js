import React from 'react';
import { Routes, NavLink, Route, useParams, useNavigate } from "react-router-dom";
import Subtopic from '@/components/navigation/navLinks/Subtopic';
import Topic from '@/components/navigation/navLinks/Topic';

function TopicsDashboard(props) {
    console.log("TopicsDashboard:",props)
    return (
        <div>
            <h2>The Topics dashboard shows an all Topics and subtopics( Topics drill down view)</h2>
            <p>Please select a Topic</p>
            {/* <Topic/> */}

            <div className="subtopic">

                {props.topic ? <h1>{props.topic}</h1> : null}
                <nav>
                <ul>
                    <li>
                        <NavLink to="topic-1">Topic 1</NavLink>
                        <ul>
                            <li>
                                <NavLink to="topic-1/subtopic-1">Subtopic 1</NavLink>
                            </li>
                            <li>
                                <NavLink to="topic-2/subtopic-2">Subtopic 2</NavLink>
                            </li>
                            <li>
                                <NavLink to="topic-3/subtopic-3">Subtopic 3</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="topic-2">Topic 2</NavLink>
                        <ul>
                            <li>
                                <NavLink to="topic-1/subtopic-1">Subtopic 1</NavLink>
                            </li>
                            <li>
                                <NavLink to="topic-2/subtopic-2">Subtopic 2</NavLink>
                            </li>
                            <li>
                                <NavLink to="topic-3/subtopic-3">Subtopic 3</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="topic-3">Topic 3</NavLink>
                        <ul>
                            <li>
                                <NavLink to="topic-1/subtopic-1">Subtopic 1</NavLink>
                            </li>
                            <li>
                                <NavLink to="topic-2/subtopic-2">Subtopic 2</NavLink>
                            </li>
                            <li>
                                <NavLink to="topic-3/subtopic-3">Subtopic 3</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
                
            </div>

            <div className="dashboard">
                <Routes>
                    <Route path="topic-1/subtopic-1" element={<Subtopic path={"subtopic-1"}/>}></Route>
                    <Route path="topic-1/subtopic-2" element={<Subtopic path={"subtopic-2"}/>}></Route>

                    {/* <Route path="order_details/:orderId" element={<OrderDetails />} /> */}
                   
                </Routes>
            </div>
        </div>
    );
}

export default TopicsDashboard;