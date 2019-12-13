import React from 'react';
import { Link } from 'react-router-dom';

import CardImage from './CardImage';
import CardInfo from './CardInfo';
import CardFooter from './CardFooter';
import CardOverlay from './CardOverlay';
import './styles.css';

/**
 * React component function for Cards.
 * @type {Function<Object>}
 * @param {string} name The name of the repo.
 * @param {string} imgUrl The link for the avatar_url.
 * @param {number} stars The number of the stars the repo has.
 * @param {owner} name The name of the repo owner.
 */
const Card = ({ name, imgUrl, stars, owner }) => {
    // TO DO: errorHandler component
    return (
        name && imgUrl && stars && owner && <div className="cardContainer">
            <Link to={`/commits/${owner}/${name}`} className="cardLink">
                <CardImage imgUrl={imgUrl} />
                <CardInfo name={name} />
                <CardFooter stars={stars} />
                <CardOverlay />
            </Link>
        </div>
    )
}

export default Card;
