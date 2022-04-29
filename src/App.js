import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Form from './components/Form';
import Confirmation from './components/Confirmation';
import Home from './components/Home';


const initialFormValues = {
  fullName: "",
  size: "",
  pepperoni: false,
  sausage: false,
  bacon: false,
  mushrooms: false,
  greenPepper: false,
  anchovies: false,
  special: ""
}

const initialOrder = ([])

const App = () => {
  const [order, setOrder] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues)

  const postNewOrder = newOrder => {
    axios.post("https://reqres.in/api/orders", newOrder)
      .then(res => {
        console.log(res.data)
      }).catch(err => console.error(err))
  }

  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value})
  }

  const orderSubmit = () => {
    const newOrder = {
      fullName: formValues.fullName,
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      bacon: formValues.bacon,
      mushrooms: formValues.mushrooms,
      greenPepper: formValues.greenPepper,
      anchovies: formValues.anchovies,
      special: formValues.special

    }
    postNewOrder(newOrder)
  }

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
          <Form 
            values={formValues}
            change={inputChange}
            submit={orderSubmit}

          />
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
