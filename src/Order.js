import React, { useState } from 'react';
import Card from './Card';
import './Order.css';

const Order = ({items, addItem, activeItems, next}) =>{

  const [vegOnly, setvegOnly] = useState(false);

  const changeVegetarian = () => {
    setvegOnly(!vegOnly);
  };

  return (
    <div className="Order">
        {next !== undefined ? <form className="form"><label>vegetarian?</label><input type="checkbox" value={vegOnly} onChange={changeVegetarian} /></form> : ''} 
        <div className="cards">
            {items.map((item) =>
                !vegOnly || item.vegetarian ? <Card key={item.id} item={item} addItem={addItem} activeItems={activeItems} /> : '' )}
        </div>
        {next !== undefined ? <p onClick={next}>Checkout</p> : ''}
    </div>
  );
}

export default Order;