// index.js
import { combineReducers } from 'redux';
import dog from '@/store/aboutPage-redux-thunk/reducers/dog';
import quote from '@/store/aboutPage-redux-thunk/reducers/quote';

const singleReducer = combineReducers({
	dog,
	quote
});

export default singleReducer;