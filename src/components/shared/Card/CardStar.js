import React from 'react';
import star from '../../../assets/icons/github_star.png';

const CardStar = ({ stars }) => {
    return (
        <div className="cardStarContainer">
            <img src={star} className="cardStarImage" />
            <div className="cardStarNum">{stars.toLocaleString()}</div>
        </div>
    );
}

export default CardStar;
