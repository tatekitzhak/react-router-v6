import { createStore, combineReducers, bindActionCreators } from "redux";

import {rootReducer, counterReducer } from '@/store/connect_mapState_mapDispatch/reducers/rootReducer';

const store = createStore(rootReducer);
  
export default store;