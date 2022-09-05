import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { incrementCounter } from '@/store/useSelector_useDispatch/actions/types';

function User(props) {
    // componentWillUnmount life-cycle.
    useEffect(() => {
        return () => {
            console.log("Good by users!!");
        };
    });

    return <h4>Users!!</h4>;
}

const netRequest = () => {
    console.log("Network Request");
};

function FiveContainer() {
    const [count, setCount] = useState(0);
    const [fruit, updateFruit] = useState("apple");
    const styles = { border: '1px solid #fff'};
    console.log("rendering...");
    const store_count = useSelector((state )=> {
        
        console.log("useSelector() invoked", { v: state.counter });
        return state.counter;
    },shallowEqual);
    const dispatch = useDispatch();

    // componentDidMount life-cycle
    useEffect(() => {
        netRequest();
    }, []);

    // componentDidUpdate life-cycle
    useEffect(() => {
        console.log("componentDidUpdate life-cycle");
    });

    // shouldComponentUpdate life-cycle
    useEffect(() => {
        console.log("Count gets an update");
    }, [count]);

    return (
        <div className="App">
            <div style={styles}>
                <p> You have {count} {fruit}!  </p>
                {count < 1 && <User />}
                <button
                    onClick={() => {
                        const incrementedValue = count + 1;
                        setCount(incrementedValue);
                        if (incrementedValue > 1) {
                            updateFruit("apples");
                        }
                    }}
                >
                    +1
                </button>
            </div>

            <div style={styles}>
                <h2>Redux Store:</h2>
                <h3>Count: {store_count}</h3>
                <button
                    onClick={() => {
                        dispatch(incrementCounter());
                    }}
                >
                    Increment!
                </button>
            </div>
        </div>
    );
}

export default FiveContainer;