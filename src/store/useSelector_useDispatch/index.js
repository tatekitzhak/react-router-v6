import { createStore, combineReducers } from "redux";

import { counterReducer } from "@/store/useSelector_useDispatch/reducers/counterReducer";

/**
 * https://www.youtube.com/watch?v=hc3CSmw3L6I
 * https://codesandbox.io/s/react-redux-hooks-shallowequal-forked-dtbwhs?file=/src/App.js
 * https://www.youtube.com/watch?v=QrxaM6A8GPU
 * https://livebook.manning.com/book/react-in-action/chapter-11/27
 */
const reducers = combineReducers({
  counter: counterReducer
});

export default createStore(reducers);