import { createStore } from "redux";

import {rootReducer, counterReducer } from '@/store/reducers/rootReducer';

const store = createStore(rootReducer);
  
export default store;