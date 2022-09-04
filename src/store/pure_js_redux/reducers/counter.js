import { combineReducers } from 'redux';

const initialCounterState = { value: 0 }

const counterReducer = (state = initialCounterState, action) => {
    console.log('counterReducer (state, action):', state, action)
    if (action.type === "INCREMENT") {
        return { value: state.value + 1 };
    }
    if (action.type === "ADD") {
        return { value: state.value + action.payload }
    }
    return state
}


const rootCounterReducer = combineReducers({
    counterReducer
});

export default rootCounterReducer;






