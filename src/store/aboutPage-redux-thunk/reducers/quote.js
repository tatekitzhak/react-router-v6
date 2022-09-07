// quote.js
const INITIAL_STATE = {
	quote: '',
	role: ''
}

export default (state = INITIAL_STATE, action={}) => {
	switch(action.type) {
		case "SET_QUOTE_DATA":
			return {
				...state,
				...action.content
			};
		default:
			return state;
	}
};