import React from 'react';
import { useSelector } from 'react-redux'

function Home(props) {

    const state = useSelector( s => s)
    console.log('state:', state)
    return (
        <div>
           Home 
        </div>
    );
}

export default Home;