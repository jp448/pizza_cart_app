import React, { useState } from 'react';
import './Checkout.css'

const Checkout = ({style, dough, toppings}) => {

    const [accepted, setAccept] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    const checkoutOrder = () => {
        setAccept(!accepted);
    }
  
    const onSubmit = (event) =>  {
        if (accepted) {
            console.log(style);
            console.log(dough);
            console.log(toppings);
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