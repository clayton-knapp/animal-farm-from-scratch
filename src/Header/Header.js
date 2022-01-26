import React from 'react';
import './Header.css';

export default function Header(props) {
  return (
    <header>Alchemy Farm, by farmer Clayton. {props.greeting}</header>
  );
}