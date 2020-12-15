import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import './Nav.css';


const Nav = ({}) =>{

  const location = useLocation();
  let orderingProcess = 0;

  switch(location.pathname) {
      case "/style":
          orderingProcess = 0;
          break;
      case "/dough":
          orderingProcess = 1;
          break;
      case "/toppings":
          orderingProcess = 2;
          break;
      default:
          orderingProcess = 3;
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