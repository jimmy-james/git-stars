import React, { useEffect, Fragment } from 'react';
import List from '../../components/shared/List/index';
import ErrorHandler from '../../components/shared/ErrorHandler/index';

import useCommits from '../../hooks/useCommits';

/**
 * React component function for CommitsPage.
 * @type {Function<Object>}
 * @param {Object} match The react-router history object.
 */
const CommitsPage = ({ match }) => {
    const {
        params: {
            owner,
            repo,
        }
    } = match;
    const [searchApi, results, errorMessage] = useCommits();

    // only call this search one time when we receive owner and repo data from the url.
    // Ideally we would like to get this in other means but since the navigation and state management is not fully built out, we will have to wait.
    useEffect(() => {
        searchApi(owner, repo);
    }, []);

    return (
        <Fragment>
            {
                errorMessage ? <ErrorHandler
                    data={{ error: 'list data came back null' }}
                    errorProps={results}
                    errorSource='CommitsPage'
                /> :
                <List commits={results} />
            }
        </Fragment>
    )
};

export default CommitsPage;
