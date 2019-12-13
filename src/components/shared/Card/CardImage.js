import React from 'react';

const CardImage = ({ imgUrl }) => {
    return (
        <div className="cardImageContainer">
            <img src={imgUrl} className="cardImage" />
        </div>
    );
};

export default CardImage;
