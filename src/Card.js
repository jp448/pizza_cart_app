import React, { useState } from 'react';
import './Card.css';

const Card = ({item, addItem, activeItems}) => {

  // set the states taking the selected items from the app 
  const currentState = activeItems.includes(item) ? true : false;
  const [active, setActive] = useState(currentState);

  //toggles the item (active => !active)
  const toggleBox = () => {
    setActive(!active);
    addItem(item);
  };

  return (
    <div className={`Card ${active ? "active" : ""}`} onClick={toggleBox}>
      <h1>{item.name}</h1>
      <h2>{item.base ? '$' + item.price : '+$' + item.price}</h2>
    </div>
  );
}

export default Card;