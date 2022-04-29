import React from "react";
import { Link, Route, Switch } from 'react-router-dom';


import Form from './components/Form';
import Confirmation from './components/Confirmation';
import Home from './components/Home';

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
      
      <Switch>
        <Route path="/pizza">
          <Form />
        </Route>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
    </div>

    
  )};
export default App;
