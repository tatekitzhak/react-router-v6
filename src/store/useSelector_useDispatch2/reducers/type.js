const initialState = { value: 0 };

const counter = (state = initialState, action) => {

    if (action.type === "INCREMENT") {
  
      return {
  
        ...state,
  
        value: state.value + 1
  
      };
  
    }
  
    return state;
  
  };

  export default counter;