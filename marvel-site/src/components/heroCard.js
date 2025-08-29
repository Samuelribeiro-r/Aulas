import React from 'react';

const HeroCard = ({ hero }) => {
    return (
        <div className="hero-card">
            <img src={hero.image} alt={hero.name} className="hero-image" />
            <h2 className="hero-name">{hero.name}</h2>
            <p className="hero-description">{hero.description}</p>
        </div>
    );
};

export default HeroCard;