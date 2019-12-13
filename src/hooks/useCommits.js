import { useState } from 'react';
import github from '../data/queries/githubApi';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const twentyFourHoursAgo = new Date(Date.now() - 86400 * 1000).toISOString();
    const today = new Date(Date.now()).toISOString();

    const searchApi = async (owner, repo) => {
        try {
            const response = await github.get(`/repos/${owner}/${repo}/commits`, {
                params: {
                    since: twentyFourHoursAgo,
                    until: today,
                }
            })

            setResults(response.data);
        } catch (err) {
            setErrorMessage('Something went wrong: ', err);
        }
    }

    return [searchApi, results, errorMessage];
}
