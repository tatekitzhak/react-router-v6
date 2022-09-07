import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDogImageAction } from '@/store/aboutPage-redux-thunk/actions/dog';
import { fetchQuoteAction } from '@/store/aboutPage-redux-thunk/actions/quote';

function About() {
    const dogData = useSelector(state => state.dog);
    const quoteData = useSelector(state => state.quote);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDogImageAction());
        dispatch(fetchQuoteAction());
        console.log('quoteData', quoteData);
    }, [dispatch]);
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