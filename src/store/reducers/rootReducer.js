import {createStore, combineReducers } from "redux";

import counter from '@/store/reducers/counter';

const rootReducer = combineReducers({
    counter
});
export default rootReducer;