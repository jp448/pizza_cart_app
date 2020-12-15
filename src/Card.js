import React, { useState } from 'react';
import './Card.css';

const Card = ({name, addItem, activeItems}) =>{

  const currentState = activeItems.includes(name) ? true : false;
  const [active, setActive] = useState(currentState);

  const toggleBox = () => {
    setActive(!active);
    addItem(name);
  };

  return (
    <div className={`Card ${active ? "active" : ""}`} onClick={toggleBox}>
      <h1>{name}</h1>
    </div>
  );
}

export default Card;