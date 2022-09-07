// quote.js
import axios from 'axios';

const setQuoteData = (content) => {
	return {
		type: "SET_QUOTE_DATA",
		content
	}
}

const fetchQuote = () => {
	return (dispatch) => {
		return axios.get('https://movie-quote-api.herokuapp.com/v1/quote/').then(response => {
			if(response.status === 200) {
				dispatch(
					setQuoteData({
						quote: response.data.quote,
						role: response.data.role
					})
				)
			}
		});
	}
}


export {
	setQuoteData,
	fetchQuote
}