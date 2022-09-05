import initialState from '@/store/useSelector_useDispatch/constants/initialState';
import * as types from '@/store/useSelector_useDispatch/constants/types';


export const counterReducer = (state = initialState.counter, action) => {
  console.log('counterReducer (state = null, action):',state , action)

    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      default:
        return state;
    }
  };