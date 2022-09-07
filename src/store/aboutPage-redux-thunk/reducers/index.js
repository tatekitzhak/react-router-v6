// index.js
import { combineReducers } from 'redux';
import dog from '@/store/aboutPage-redux-thunk/reducers/dogReducer';
import quote from '@/store/aboutPage-redux-thunk/reducers/quoteReducer';

const singleReducer = combineReducers({
	dog,
	quote
});

export default singleReducer;