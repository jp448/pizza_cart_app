import React from 'react';
import './PizzaState.css';

const PizzaState = ({style, dough, toppings}) =>{

  return (
    <div className="PizzaState">
        {style.length !== 0 ? <p>{'Style of Pizza: ' + style.join()}</p> : ''}
        {dough.length !== 0 ? <p>{'Pizza Dough Type: ' + dough.join()}</p> : ''}
        {toppings.length !== 0 ? <p>{'Pizza Toppings: ' + toppings.join(', ')}</p> : ''}
    </div>
  );
}

export default PizzaState;