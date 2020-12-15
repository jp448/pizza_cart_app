import React, { useState } from 'react';
import Card from './Card';
import './Order.css';

const Order = ({items, addItem, activeItems, next}) =>{
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="Order">
        <div className="cards">
            {items.map((item) =>
                <Card key={item.id} name={item.name} addItem={addItem} activeItems={activeItems} />
            )}
        </div>
        {next !== undefined ? <p onClick={next}>Checkout</p> : ''}
    </div>
  );
}

export default Order;