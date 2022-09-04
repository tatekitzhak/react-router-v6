import { INC_NUM ,DEC_NUM, ADD_NUMBER, RESET } from '@/store/constants/actionTypes';

// The reducer updates the count
const initialState = {
    incrValue: 1
};

export const increment = (state = initialState, action) => {
    console.log("incReducer action:", action)

    switch (action.type) {
        case INC_NUM:
            return {
                ...state,
                incrValue: state.incrValue + 1
            };
        case ADD_NUMBER:
            return {
                ...state,
                incrValue: state.incrValue + action.payload
            }
        case RESET:
            return {
                ...state,
                incrValue: 0
            };
        default:
            return state;
    }

}

