import React from 'react';
import './PizzaState.css';

const PizzaState = ({style, dough, toppings}) =>{
  
  // a basic sum of an array function   
  const sum = (array) => {
    return array.reduce(function(a, b){
        return a + b.price;
    }, 0);
  };
  
  // logic to calculatue the price of the selected items
  const calcPrice = () => {
    return sum(style) + sum(dough) + sum(toppings);
  };

  return (
    <div className="PizzaState">
        {style.length !== 0 ? <p>{'Style of Pizza: ' + style.map(i => { return i.name; }).join(', ') }</p> : ''}
        {dough.length !== 0 ? <p>{'Pizza Dough Type: ' + dough.map(i => { return i.name; }).join(', ') }</p> : ''}
        {toppings.length !== 0 ? <p>{'Pizza Toppings: ' + toppings.map(i => { return i.name; }).join(', ') }</p> : ''}
        <p>{'Total: $' + calcPrice()}</p>
    </div>
  );
}

export default PizzaState;

