import React from 'react';
import './styles.css';

const CardInfo = ({ name }) => {
    return (
        <div className="cardInfoContainer">
            <div className="cardInfo">{name}</div>
        </div>
    );
};

export default CardInfo;
