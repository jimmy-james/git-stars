import React from 'react';
import CardStar from './CardStar';

const CardFooter = ({ stars }) => {
    return (
        <div className="cardFooterContainer">
            <CardStar stars={stars} />
        </div>
    );
};

export default CardFooter;
