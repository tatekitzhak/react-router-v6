import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '@/store/actions/decrement';

/**
 * https://daveceddia.com/redux-mapdispatchtoprops-object-form/
 * https://codesandbox.io/s/yv6kqo1yw9
 */
function Counter(props) {
    console.log('Counter:', props)
    return (
        <div>
            <h2>{props.count}</h2>
            <button onClick={ props.decrement}>-</button>
            <button onClick={props.increment}>+</button>
            <button onClick={props.reset}>reset</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps:', state)
    return {
        count: state.count,
    }
}
const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps:', dispatch)
    return {
        decrement: () => dispatch(decrement()),
        increment: () => dispatch(increment()),
        reset: () => dispatch(reset())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);