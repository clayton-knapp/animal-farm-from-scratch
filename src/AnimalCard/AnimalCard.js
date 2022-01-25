import React from 'react';

import './AnimalCard.css';

export default function AnimalCard({ name, type, says, top, left }) {
  return (
    <div className="animal-card" style = {{ top:top, left:left }} >
      {/* image */}
      <img src={`/animals/${type}.svg`} />
      {/* name */}
      <h2>{name}</h2>
      {/* says */}
      <p>{says}</p>
    </div>
  );
}
