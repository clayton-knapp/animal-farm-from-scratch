import React from 'react';
import AnimalList from '../AnimalList/AnimalList';

import './Main.css';


export default function Main(props) {
  return <main style={{ backgroundImage: 'url(/background.png)' }}>
    <AnimalList
      animals = {props.animals}
    />
    <AnimalList
      animals = {props.moreAnimals}
    />
  </main>;
}
