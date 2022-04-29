import React from "react";
import { Link, Route, Switch } from 'react-router-dom'
import Form from './components/Form';
import Confirmation from './components/Confirmation';

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Link id="home" to="/">Home</Link>
          <Link id="order-pizza" to="/order">Place an order</Link>
          <Link id="order-confirmation" to="/confirmation">Your order</Link> 
        </nav> 
      </header>
      <h1>Bloomtech Eats!</h1>
      <p>Satisfy your hunger!</p>
      
      <Switch>
        <Route path={"/order"}>
          <Form />
        </Route>
        <Route path={"/confirmation"}>
          <Confirmation />
        </Route>
      </Switch>
      
    </div>

    
  )};
export default App;
