import { INC_NUM ,DEC_NUM, ADD_NUMBER, RESET } from '@/store/connect_mapState_mapDispatch/constants/actionTypes';

// The action creators
export const increment = () => ({ type: INC_NUM });
export const decrement = () => ({ type: DEC_NUM});
export const reset = (value) => ({ type: RESET, payload: value });
export const addNumber = (num) => {
    return {
        type: ADD_NUMBER,
        payload: num
    }
}
