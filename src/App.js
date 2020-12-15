import React, { useState } from 'react';
import { Route, Switch } from "react-router";
import { useHistory } from "react-router-dom";
import Order from "./Order";
import PizzaState from "./PizzaState";
import Home from "./Home";
import Checkout from "./Checkout";
import Nav from "./Nav";
import './App.css';

const styleItems =
  [
    {
      id: 1,
      name: "Italian"
    },
    {
      id: 2,
      name: "American"
    }
  ];

  const doughItems =
    [
      {
        id: 3,
        name: "standard"
      },
      {
        id: 4,
        name: "wholegrain"
      },
      {
        id: 5,
        name: "sour dough"
      }
    ];

    const toppingItems =
    [
      {
        id: 6,
        name: "tuna"
      },
      {
        id: 7,
        name: "mushrooms"
      },
      {
        id: 8,
        name: "salami"
      },
      {
        id: 9,
        name: "peppers"
      },
      {
        id: 10,
        name: "tomatoes"
      },
      {
        id: 11,
        name: "basil"
      },
      {
        id: 12,
        name: "ham"
      },
      {
        id: 13,
        name: "pineapples"
      },
      {
        id: 14,
        name: "onions"
      },
      {
        id: 15,
        name: "cheese"
      }
    ];


function App() {

  const [style, setStyle] = useState([]);
  const [dough, setDough] = useState([]);
  const [toppings, setToppings] = useState(["cheese"]);

  const history = useHistory();

  const addStyle = (name) => {
    setStyle([name]);
    history.push("/dough");
  };

  const addDough = (name) => {
    setDough([name]);
    history.push("/toppings");
  };

  const addTopping = (name) => {
    
    if (toppings.includes(name)) {
      // if already in array remove it 
      let copyToppings = [...toppings];
      const index = copyToppings.indexOf(name);
      copyToppings.splice(index, 1);
      setToppings(copyToppings);
    } else {
      // if not in array add it
      setToppings(toppings.concat(name));
    }
    
  };

  const toCheckout = () => {
    history.push("/checkout");
  };

  return (
    <div className="App">
      <Nav />
      <PizzaState style={style} dough={dough} toppings={toppings} />
      <Switch>
        <Route 
          exact path="/"      
          render={() => <Home />} />
        <Route 
          exact path="/style"  
          render={() => <Order items={styleItems} addItem={addStyle} activeItems={style} />} />
        <Route 
          exact path="/dough"
          render={() => <Order items={doughItems} addItem={addDough} activeItems={dough} />} />
        <Route 
          exact path="/toppings"
          render={() => <Order items={toppingItems} addItem={addTopping} activeItems={toppings} next={toCheckout} />} />
        <Route 
          exact path="/checkout"
          render={() => <Checkout style={style} dough={dough} toppings={toppings} />} />
      </Switch>
    </div>
  );
}

export default App;
