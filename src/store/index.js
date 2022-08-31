import { createStore } from "redux";

import {rootReducer, counterReducer } from '@/store/reducers/rooreducer';

const store = createStore(counterReducer);
  
export default store;