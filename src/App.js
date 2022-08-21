import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from '@/components/router/Router';

function App(props) {
    return (
            <div className="App">
                <h1>React Router Example</h1>
                <Router/>
             </div>
        );
}

export default App;