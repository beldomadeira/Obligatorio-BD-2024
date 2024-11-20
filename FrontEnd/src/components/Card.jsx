import React from 'react';
import './Card.css';

const Card = ({ onClick, icon: Icon, cardName }) => {
    return (
        <div className="links">
            <Icon size={50} />
            <div className="card-name">{cardName}</div>
        </div>
    );
};

export default Card;
