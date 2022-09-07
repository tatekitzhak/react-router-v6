// store.js
import { createStore, applyMiddleware, compose } from 'redux';
import singleReducer from '@/store/aboutPage-redux-thunk/reducers/index';
import thunk from 'redux-thunk';

const store_thunk = createStore(
    singleReducer,
    compose(
        applyMiddleware(thunk)
    )
);

export default store_thunk;