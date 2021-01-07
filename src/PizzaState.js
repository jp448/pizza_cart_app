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

  let ingredients = [];
  toppings.forEach(i => ingredients.push(<li>{i.name}</li>)); 

  return (
    <div className="PizzaState">
        {style.length !== 0 ? <p><span>Style of Pizza</span><ul><li>{style.map(i => { return i.name; }).join(', ') }</li></ul></p> : ''}
        {dough.length !== 0 ? <p><span>Pizza Dough Type</span><ul><li>{dough.map(i => { return i.name; }).join(', ') }</li></ul></p> : ''}
        {toppings.length !== 0 ? <p><span>Pizza Toppings</span><ul>{ingredients}</ul></p> : ''}
        <p><span>Total: </span>${calcPrice()}</p>
    </div>
  );
}

export default PizzaState;

