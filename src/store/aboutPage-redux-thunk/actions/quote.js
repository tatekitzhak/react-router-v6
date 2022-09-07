// quote.js
import axios from 'axios';

const setQuoteDataAction = (content) => {
	return {
		type: "SET_QUOTE_DATA",
		content
	}
}

const fetchQuoteAction = () => {
	return (dispatch) => {
		return axios.get('https://movie-quote-api.herokuapp.com/v1/quote/').then(response => {
			if(response.status === 200) {
				dispatch(
					setQuoteDataAction({
						quote: response.data.quote,
						role: response.data.role
					})
				)
			}
		});
	}
}


export {
	setQuoteDataAction,
	fetchQuoteAction
}