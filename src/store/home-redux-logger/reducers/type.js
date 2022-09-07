const initialState = '';

function nameReducer(state = initialState, action) {
  console.log('nameReducer(state, action):', state, action)
  switch (action.type) {
    case "UPDATE_NAME":
      return action.payload;
    default:
      return state;
  }
}

  export default nameReducer;