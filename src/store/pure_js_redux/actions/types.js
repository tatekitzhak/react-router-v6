import { counter } from '@/store/pure_js_redux/constants/types';
import * as types from '@/store/pure_js_redux/constants/types';

// Counter App 
export function incrementAction() {
  return {
    type: types.counter.INCREMENT
  };
}

export function addAction(number) {
  return {
    type: types.counter.ADD,
    payload: number,
  };
}

//Product app
export const changeUserEmail = (email) => ({
  type: types.product.CHANGE_USER_EMAIL,
  payload: { email }
});
export const addProduct = (product) => ({
  type: types.product.ADD_PRODUCT,
  payload: { product }
});




