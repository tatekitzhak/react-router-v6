const initialState = {
    users: [],
    username: "Ran",
    search: "",
  };
  
  const userManagReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_USER":
        return {
          ...state,
          username: "",
          users: [...state.users, state.username],
        };
      case "CHANGE_USERNAME":
        return {
          ...state,
          username: action.payload,
        };
      case "CHANGE_SEARCH":
        return {
          ...state,
          search: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userManagReducer;