import { counter } from '@/store/pure_js_redux/constants/types';
import * as types from '@/store/pure_js_redux/constants/types';


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
  

  
  
  