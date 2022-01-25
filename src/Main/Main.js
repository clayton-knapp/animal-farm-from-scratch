import React from 'react';
import AnimalCard from '../AnimalCard/AnimalCard';

import './Main.css';


export default function Main(props) {
  return <main style={{ backgroundImage: 'url(/background.png)' }}>
    {
      // console.log(props.animals)
      props.animals.map((animal, i) =>
        <AnimalCard
          key={i}
          name = {animal.name}
          type = {animal.type}
          says = {animal.says}
          top = {animal.top}
          left = {animal.left}
        />
      )
    }
  </main>;
}
