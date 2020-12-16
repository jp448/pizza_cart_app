import React, { useState } from 'react';
import './Checkout.css'

const Checkout = ({style, dough, toppings}) => {

    const [accepted, setAccept] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    //checks whether the order has been confirmed by user
    const checkoutOrder = () => {
        setAccept(!accepted);
    }
  
    const onSubmit = (event) =>  {
        if (accepted) {
            //{“style”: “italian”, “dough”: “standard”,“toppings”: [“cheese”, “salami”]}
            const pizza = {
                style: style[0].name,
                dough: dough[0].name,
                toppings: toppings.map(topping => {return topping.name;})
            }
            console.log(pizza);
            setConfirmed(true);
        } else {
            alert("Please confirm your order");
        }
        event.preventDefault();
    }

  return (
    <div className="Checkout" onSubmit={onSubmit}>
        <form>
            <label>Confirm order:</label>
            <input type="checkbox" value={accepted} onChange={checkoutOrder} /><br></br>
            <button className="btn">checkout</button>
        </form>
        {confirmed ? <p>Your order is on its way!</p> : ""}
    </div> 
  );
}

export default Checkout;