import React from 'react';
import AnimalCard from '../AnimalCard/AnimalCard';

export default function AnimalList(props) {
  return <div className='animal-list'>
    {
    // console.log(props.animals)
      props.animals.map((animal, i) =>
        <AnimalCard
          key={i}
          // name = {animal.name}
          // type = {animal.type}
          // says = {animal.says}
          // top = {animal.top}
          // left = {animal.left}
          {...animal}
        />
      )
    }
  </div>;
}
