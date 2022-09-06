import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import increment from "@/store/useSelector_useDispatch2/actions/types";

function UseSelectorAndDispatch2(props) {
    return (
        <div>
            UseSelectorAndDispatch2.js
            <Button />

            <Display />
        </div>
    );
}

function Button() {
    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(increment());
  
    };
    return (
      <div>
        <button onClick={handleClick}> Click here </button>
      </div>
  
    );
  }

  function Display() {
    const value = useSelector((state) => state.value);
    return (
      <div>
        <p> {value} </p>
      </div>
    );
  }  

export default UseSelectorAndDispatch2;