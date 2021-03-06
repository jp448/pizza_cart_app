import React, { useState } from 'react';
import { Route, Switch } from "react-router";
import { useHistory, useLocation } from "react-router-dom";
import Order from "./Order";
import PizzaState from "./PizzaState";
import Home from "./Home";
import Checkout from "./Checkout";
import Nav from "./Nav";
import './App.css';
import normal from "./img/pizza_dough.png";
import wheat from "./img/pizza_dough_wheat.png";
import sour from "./img/pizza_dough_sour.png";
import america from "./img/american_flag.png";
import italy from "./img/italian_flag.png";
import cheese from "./img/cheese.png";
import mushroom from "./img/mushroom.png";
import salami from "./img/salami.png";
import pepper from "./img/pepper.png";
import beef from "./img/beef.png";
import chicken from "./img/chicken.png";
import ham from "./img/ham.png";
import pineapple from "./img/pineapple.png";
import onion from "./img/onion.png";
import tuna from "./img/tuna.png";

// The data for making the pizzas (styles, dough types, toppings)
const items =
  { "style": [
    {
      id: 1,
      name: "Italian",
      base: true,
      vegetarian: true,
      price: 4,
      img: italy
    },
    {
      id: 2,
      name: "American",
      base: true,
      vegetarian: true,
      price: 5,
      img: america
    }
  ],
  "dough": [
      {
        id: 3,
        name: "standard",
        base: false,
        vegetarian: true,
        price: 0,
        img: normal
      },
      {
        id: 4,
        name: "wholegrain",
        base: false,
        vegetarian: true,
        price: 2,
        img: wheat
      },
      {
        id: 5,
        name: "sour dough",
        base: false,
        vegetarian: true,
        price: 3,
        img: sour
      }
    ], 
  "toppings": [
      {
        id: 6,
        name: "cheese",
        base: false,
        vegetarian: true,
        price: 0,
        img: cheese
      },
      {
        id: 7,
        name: "mushrooms",
        base: false,
        vegetarian: true,
        price: 1,
        img: mushroom
      },
      {
        id: 8,
        name: "salami",
        base: false,
        vegetarian: false,
        price: 2,
        img: salami
      },
      {
        id: 9,
        name: "peppers",
        base: false,
        vegetarian: true,
        price: 1,
        img: pepper
      },
      {
        id: 10,
        name: "beef",
        base: false,
        vegetarian: false,
        price: 3,
        img: beef
      },
      {
        id: 11,
        name: "chicken",
        base: false,
        vegetarian: false,
        price: 2,
        img: chicken
      },
      {
        id: 12,
        name: "ham",
        base: false,
        vegetarian: false,
        price: 2,
        img: ham
        
      },
      {
        id: 13,
        name: "pineapples",
        base: false,
        vegetarian: true,
        price: 3,
        img: pineapple
      },
      {
        id: 14,
        name: "onions",
        base: false,
        vegetarian: true,
        price: 1,
        img: onion
      },
      {
        id: 15,
        name: "tuna",
        base: false,
        vegetarian: false,
        price: 1,
        img: tuna
      }
  ]};


function App() {

  const [selectedStyle, setSelectedStyle] = useState([]);
  const [selectedDough, setSelectedDough] = useState([]);
  const [selectedToppings, setSelectedToppings] = useState([items.toppings[0]]);

  //used with react-router-dom
  const history = useHistory();
  const location = useLocation();

  //style type is added to cart then user moves to the dough type selection page
  const addStyle = (item) => {
    setSelectedStyle([item]);
    history.push("/dough");
  };
  
  //dough type is added to cart then user moves to the toppings selection page
  const addDough = (item) => {
    setSelectedDough([item]);
    history.push("/toppings");
  };

  //toppings are added (the can be removed too) 
  const addTopping = (item) => {
    if (selectedToppings.includes(item)) {
      // if already in array remove topping 
      let copyToppings = [...selectedToppings];
      const index = copyToppings.indexOf(item);
      copyToppings.splice(index, 1);
      setSelectedToppings(copyToppings);
    } else {
      // if not in array add topping
      setSelectedToppings(selectedToppings.concat(item));
    } 
  };

  // for the checkout button on the toppings page
  const toCheckout = () => {
    history.push("/checkout");
  };

  //use react-router-dom to build the checkout process (home -> syle -> dough -> toppings -> checkout)
  return (
    <div className="App">
      {location.pathname === "/" ? '' : <Nav />}
      {location.pathname === "/" ? '' : <PizzaState style={selectedStyle} dough={selectedDough} toppings={selectedToppings} />}
      <Switch>
        <Route 
          exact path="/"      
          render={() => <Home />} />
        <Route 
          exact path="/style"  
          render={() => <Order items={items.style} addItem={addStyle} activeItems={selectedStyle} />} />
        <Route 
          exact path="/dough"
          render={() => <Order items={items.dough} addItem={addDough} activeItems={selectedDough} /> } />
        <Route 
          exact path="/toppings"
          render={() => <Order items={items.toppings} addItem={addTopping} activeItems={selectedToppings} next={toCheckout} />} />
        <Route 
          exact path="/checkout"
          render={() => <Checkout style={selectedStyle} dough={selectedDough} toppings={selectedToppings} /> } />
      </Switch>
    </div>
  );
}

export default App;
