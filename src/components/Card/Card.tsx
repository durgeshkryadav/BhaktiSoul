import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title }) => {
  return (
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }}>
        {/* Background image */}
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        {/* Title */}
      </div>
    </div>
  );
}

export default Card;
