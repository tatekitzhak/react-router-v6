// The reducer updates the count
const initialState = {
    decrValue: -1
};

export const decReducer = (state = initialState, action) => {
    console.log("decReducer action:", action)
    switch (action.type) {
        case "DEC":
            return {
                ...state,
                decrValue: state.decrValue - 1
            };
        case "RESET":
            return {
                ...state,
                decrValue: 0
            };
        default:
            return state;
    }

}

