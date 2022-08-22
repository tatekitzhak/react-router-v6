import React from "react"
import { Routes, Route, NavLink, Link } from "react-router-dom"
import Dashboard from '@/components/Dashboard';

export const Home = () => {
    return <div>Home page</div>
}
export const About = () => {
    return <div>About </div>
}
export const NotFound = () => {
    return <div>NotFound, 404 page</div>
}

function App() {
    return (
        <div className="App">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="about">About</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="main">
                {/* Define all the routes */}
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="dashboard/*" element={<Dashboard />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default App;
