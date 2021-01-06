import React from 'react';
import { useHistory } from "react-router-dom";
import "./Home.css"
import pizza from "./img/pizza.png"

const Home = ({}) =>{

  // Uses react-router-dom to get history to navigate to first order page
  const history = useHistory();

  const toOrder = () => {
    history.push("/style");
  };

  return (
    <div className="Home">
        <h1>Welcome to Pizza Cart!</h1>
        <h3>Make Your Own Pizza</h3>
        <div><img className="rotate" src={pizza}/></div>
        <button onClick={toOrder}>Order!</button>
    </div>
  );
}

export default Home;