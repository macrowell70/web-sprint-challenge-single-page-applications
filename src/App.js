import React from "react";
import { Link, Route, Switch } from 'react-router-dom'
import Form from './components/Form';
import Confirmation from './components/Confirmation';

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/pizza">Place an order</Link>
          <Link to="/confirmation">Your order</Link> 
        </nav> 
      </header>
      <h1>Bloomtech Eats!</h1>
      <p>Satisfy your hunger!</p>
      <Link id="order-pizza" to="/pizza"><button>Get Started!</button></Link>
      
      <Switch>
        <Route exact path="/pizza">
          <Form />
        </Route>
        <Route exact path="/confirmation">
          <Confirmation />
        </Route>
      </Switch>
      
    </div>

    
  )};
export default App;
