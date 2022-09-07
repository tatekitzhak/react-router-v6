import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger'
import nameReducer from "@/store/home-redux-logger/reducers/type";

/**
 * https://www.kaloraat.com/articles/react-hooks-with-redux
 */

const rootReducer = combineReducers({
    name: nameReducer,
  });
  

const store = createStore(rootReducer, {},
    applyMiddleware(logger));

export default store;



