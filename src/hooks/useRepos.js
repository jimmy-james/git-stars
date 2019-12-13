import { useEffect, useState } from 'react';
import github from '../data/queries/githubApi';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const response = await github.get('/search/repositories', {
                params: {
                    q: 'stars:>10000',
                    page: 1,
                    per_page: 100,
                    sort: 'stars',
                }
            })

            setResults(response.data.items);
        } catch (err) {
            setErrorMessage('Something went wrong: ', err);
        }
    }

    // initialize the app with some data from API on load.
    // useEffect takes two params. The first is the function we want to invoke just once.
    // the second is an array. If [], then action invokes only once. If [value], then action will invoke as many times as 'value' is changed.
    useEffect(() => {
        searchApi();
    }, []);

    return [searchApi, results, errorMessage];
}
