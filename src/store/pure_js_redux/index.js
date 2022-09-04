import { createStore, combineReducers, bindActionCreators } from "redux";
import { incrementAction, addAction } from '@/store/pure_js_redux/actions/increment';

const initialState = { value: 0 }

const reducer = (state = initialState, action) => {
    console.log('state, action 1:',state, action)
    if (action.type === "INCREMENT") {
        return { value: state.value + 1 };
    }
    if (action.type === "ADD") {
        return { value: state.value + action.payload }
    }
    return state
  }
  
  
const rootCounterReducer = combineReducers({
    reducer
});


  
  export const store_test = createStore(rootCounterReducer)
  const actions = bindActionCreators({ incrementAction, addAction }, store_test.dispatch)
  
console.log('1:',actions.addAction(300)); // { value: 0 }

actions.incrementAction();

console.log('2:',store_test.getState()); // { value: 1 }

