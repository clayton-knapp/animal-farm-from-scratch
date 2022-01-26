import React from 'react';

import './AnimalCard.css';

export default function AnimalCard({ name, type, says, top, left, size, color }) {
  return (
    <div className="animal-card" style = {{ top:top, left:left }} >
      {/* image */}
      <img src={`/animals/${type}.svg`} width={size}/>
      {/* name */}
      <h2 style={{ backgroundColor:color }}>{name}</h2>
      {/* says */}
      <p>{says}</p>
    </div>
  );
}
