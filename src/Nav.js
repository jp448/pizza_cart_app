import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import './Nav.css';


const Nav = ({}) =>{

  // uses react-router-dom location to navigate through app- user cannot skip around but can return to previous pages  
  const location = useLocation();
  let orderingProcess = 0;

  const changeProcessNumber = (no) => {
    if (orderingProcess < no) {
        orderingProcess = no;
    }
  }

  // switch used to move through the app 
  switch(location.pathname) {
      case "/style":
          changeProcessNumber(0);
          break;
      case "/dough":
          changeProcessNumber(1);
          break;
      case "/toppings":
          changeProcessNumber(2);
          break;
      default:
          changeProcessNumber(3)
  }

  return (
    <nav className="Nav">
        {orderingProcess > 0 ? <NavLink exact to="/style" activeClassName='Nav-active'>1</NavLink> : <p className="navitem">1</p>}
        {orderingProcess > 1 ? <NavLink exact to="/dough" className="navitem" activeClassName='Nav-active'>2</NavLink> : <p className="navitem">2</p>}
        {orderingProcess > 2 ? <NavLink exact to="/toppings" className="navitem" activeClassName='Nav-active'>3</NavLink> : <p className="navitem">3</p>} 
    </nav>
  );
}

export default Nav;