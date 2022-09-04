import { createStore, applyMiddleware, bindActionCreators } from "redux";
import { incrementAction, addAction } from '@/store/pure_js_redux/actions/types';
import rootCounterReducer from '@/store/pure_js_redux/reducers/counter';

/**
 * https://dev.to/thesanjeevsharma/just-redux-the-complete-guide-44d5
 */
import { changeUserEmail, addProduct } from '@/store/pure_js_redux/actions/types'
import rootProductReducer from '@/store/pure_js_redux/reducers/product'

export const store_test = createStore(rootCounterReducer)
/* const actions = bindActionCreators({ incrementAction, addAction }, store_test.dispatch)

console.log('1:', actions.addAction(500)); // { value: 0 }

actions.incrementAction();

console.log('2:', store_test.getState()); // { value: 1 }
 */
/////////  Product app

/* 
export const store_test2 = createStore(rootCounterReducer)
const actions = bindActionCreators({ ichangeUserEmail, addProduct }, store_test2.dispatch)

console.log('1:', actions.addAction(500)); // { value: 0 }

actions.incrementAction();

console.log('2:', store_test2.getState()); // { value: 1 }

 */
const logger = (store) => (next) => (action) => {
  console.log("DISPATCHED ACTION: ", action);
  next(action);
}
const store2 = createStore(rootProductReducer,applyMiddleware(logger));

console.log(store2.getState()); 
// { user: { name: 'Mark', email: 'mark@facebook.com' }, cart: { products: [] } }

store2.dispatch(changeUserEmail("mark@instagrama.com"));

console.log(store2.getState()); 
// { user: { name: 'Mark', email: 'mark@instagram.com' }, cart: { products: [] } }

