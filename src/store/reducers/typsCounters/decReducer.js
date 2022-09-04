import { DEC_NUM, RESET } from '@/store/constants/actionTypes';
// The reducer updates the count
const initialState = {
    decrValue: -1
};

export const decrement = (state = initialState, action) => {
    console.log("decReducer action:", action)
    switch (action.type) {
        case DEC_NUM:
            return {
                ...state,
                decrValue: state.decrValue - 1
            };
        case RESET:
            return {
                ...state,
                decrValue: 0
            };
        default:
            return state;
    }

}

