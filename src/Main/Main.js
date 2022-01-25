import React from 'react';
import { animals } from '../data';

export default function Main(props) {
  return <main>
    <p>list animals here</p>
    {
      // console.log(props.animals)
      props.animals.map((animal, i) =>
        <p key={i}>{animal.name}</p>
      )
    }
  </main>;
}
