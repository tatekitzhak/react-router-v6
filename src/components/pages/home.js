import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import updateName from '@/store/home-redux-logger/actions/types';

function Home() {
    return (
        <div>
            Home
            <Name/>
        </div>
    );
}

function Name() {
    // allows you to extract data from the Redux store state
    const { name } = useSelector((state) => ({ ...state }));
    // const { name } = useSelector((state) => ({
    //   name: state.name,
    // }));
  
    // use dispatch method to update state
    const dispatch = useDispatch();
  
    function handleUpdateName(event) {
        
      dispatch(updateName(event.target.value));
      
    }
  
    return (
      <div>
        <p>{JSON.stringify(name)}

        </p>
        <input placeholder="Input your name" onChange={handleUpdateName} />
      </div>
    );
  }

export default Home;
