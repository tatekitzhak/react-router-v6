import React, { useState } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset, addNumber } from '@/store/actions/actions';

/**
 * https://daveceddia.com/redux-mapdispatchtoprops-object-form/
 * https://codesandbox.io/s/yv6kqo1yw9
 */
function Counter(props) {
    const style = { display: 'inline-block' };
    const [resetMessage, setREsetMessage] = useState('Reset to default value')
    const [num, setNum] = useState(null)
    console.log('Counter props:', props)

      function handleAddNumber() {
        console.log("handleAddNumber:", num);
        //this.props.addUser(this.state.username);
        props.addNumber(num)
      }

      function handleInput(e) {
        e.preventDefault();
        console.log("handleInput:", e.target.value);
        const value = Number(e.target.value)
        if (typeof value === 'number' && !Number.isNaN(value) ) {
            console.log('✅ value is a number:',value);
            setNum(value)
          } else {
            console.log('⛔️ value is NOT a number');
          }
      }

    return (
        <div>
            
            <div style={style} >
                <p>Increment:</p>
                <h2>{props.countValue}</h2>
                <button onClick={props.increment}>+</button>
            </div>
            <div style={style}>
                <p>Decrement:</p>
                <h2>{props.decValue}</h2>
                <button onClick={props.decrement}>-</button>
            </div>
            <div style={style} >
                <p>Add:</p>
                <input type="text" onChange={handleInput}/>
                <button onClick={handleAddNumber}>Add value</button>
            </div>
            <div style={style}>
                <p>Reset:</p>
                <button onClick={() => props.reset(resetMessage)}>reset</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps:', state)
    return {
        countValue: state.increment.incrValue,
        decValue: state.decrement.decrValue,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        decrement: () => dispatch(decrement()),
        increment: () => dispatch(increment()),
        reset: (ownValue) => dispatch(reset(ownValue)),
        addNumber: (stateValue) => dispatch(addNumber(stateValue))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);