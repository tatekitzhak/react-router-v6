import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDogImage } from '@/store/aboutPage-redux-thunk/actions/dog';
import { fetchQuote } from '@/store/aboutPage-redux-thunk/actions/quote';

function About() {
    const dogData = useSelector(state => state.dog);
    const quoteData = useSelector(state => state.quote);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDogImage());
        dispatch(fetchQuote());
        console.log('quoteData', quoteData);
    }, []);
    return (
        <div>
            About
            <div>
                <img src={dogData.url} alt='dog' />
                <p>{quoteData.quote}</p>
                <p>- {quoteData.role}</p>
            </div>
        </div>
    );
}



export default About;