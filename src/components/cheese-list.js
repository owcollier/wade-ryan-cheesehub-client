import React from 'react';

export default function CheeseList(props) {

  const cheeses = props.cheeses.map((cheese, index) => (
    <li key={index}>
      {cheese}
    </li>
  ));

  return (
    <ul id="cheeseList" className="cheese-list">
      {cheeses}
    </ul>
  );
}