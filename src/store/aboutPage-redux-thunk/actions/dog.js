import axios from 'axios';

const setDogData = (content) => {
	return {
		type: "SET_DOG_DATA",
		content
	}
}

const fetchDogImage = () => {
	return (dispatch) => {
		return axios.get('https://dog.ceo/api/breeds/image/random').then(response => {
			if(response.status === 200) {
				dispatch(
					setDogData({
						url: response.data.message
					})
				)
			}
		});
	}
}


export {
	setDogData,
	fetchDogImage
}