import React from 'react';

import './AnimalCard.css';

export default function AnimalCard(props) {
  return (
    <div className="animal-card" style = {{ top:props.top, left:props.left }} >
      {/* image */}
      <img src={`/animals/${props.type}.svg`} />
      {/* name */}
      <h2>{props.name}</h2>
      {/* says */}
      <p>{props.says}</p>
    </div>
  );
}
