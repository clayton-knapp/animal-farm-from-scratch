import React from 'react';
import { animals } from '../data';
import AnimalCard from '../AnimalCard/AnimalCard';

export default function Main(props) {
  return <main>
    <p>list animals here</p>
    {
      // console.log(props.animals)
      props.animals.map((animal, i) =>
        <AnimalCard
          key={animal.i}
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
