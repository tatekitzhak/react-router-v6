// The reducer updates the count
const initialState = {
    incrValue: 1
};

export const increment = (state = initialState, action) => {
    console.log("incReducer action:", action.payload)

    switch (action.type) {
        case "INC":
            return {
                ...state,
                incrValue: state.incrValue + 1
            };
        case "ADD":
            return {
                ...state,
                incrValue: state.incrValue + action.payload
            }
        case "RESET":
            return {
                ...state,
                incrValue: 0
            };
        default:
            return state;
    }

}

