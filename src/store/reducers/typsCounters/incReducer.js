// The reducer updates the count
const initialState = {
    incrValue: 1
};

export const incReducer = (state = initialState, action) => {
    console.log("incReducer action:", action)

    switch (action.type) {
        case "INC":
            return {
                ...state,
                incrValue: state.incrValue + 1
            };
        case "RESET":
            return {
                ...state,
                incrValue: 0
            };
        default:
            return state;
    }

}

