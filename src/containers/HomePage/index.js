import React from 'react';
import Card from '../../components/shared/Card'
import ErrorHandler from '../../components/shared/ErrorHandler/index';

import useRepos from '../../hooks/useRepos';

import './styles.css';

/**
 * React component function for Cards.
 * @type {Function<Object>}
 * The HomePage init will automatically fetch with params the GH API for top 100 starred repos via useRepos hook.
 */
const HomePage = () => {
    const [searchApi, results, errorMessage] = useRepos();

    return (
        <div className="homePageContainer">
            <div className="cardWrapper">
            {
                errorMessage ? <ErrorHandler
                    data={{ error: 'card data came back null' }}
                    errorProps={results}
                    errorSource='HomePage'
                /> :
                results.map((item, i) =>
                <Card
                    key={i + '-' + item.id}
                    owner={item.owner.login}
                    name={item.name}
                    imgUrl={item.owner.avatar_url}
                    stars={item.stargazers_count}
                />)
            }
            </div>
        </div>
    );
};

export default HomePage;
