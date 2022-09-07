import axios from 'axios';

const setDogDataAction = (content) => {
	return {
		type: "SET_DOG_DATA",
		 content
	}
}

const fetchDogImageAction = () => {
	return (dispatch) => {
		return axios.get('https://dog.ceo/api/breeds/image/random').then(response => {
			if(response.status === 200) {
				dispatch(
					setDogDataAction({
						url: response.data.message
					})
				)
			}
		});
	}
}


export {
	setDogDataAction,
	fetchDogImageAction
}