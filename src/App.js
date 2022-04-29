import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

import Form from './components/Form';
import Confirmation from './components/Confirmation';
import Home from './components/Home';


const formSchema = yup.object().shape({
  fullName: yup
    .string()
    .trim()
    .required("Please enter your full name")
    .min(2, "name must be at least 2 characters"),
  size: yup
    .string()
    .oneOf(["small", "medium", "large", "x-large"], "please pick your size"),
})


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

const initialFormErrors = {
  fullName: "",
  size: ""
}

const initialOrder = ([])

const App = () => {
  const [order, setOrder] = useState(initialOrder);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postNewOrder = newOrder => {
    axios.post("https://reqres.in/api/orders", newOrder)
      .then(res => {
        setOrder([ ...order, res.data ]);
        setFormValues(initialFormValues)
      }).catch(err => console.error(err))
  }


  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value});
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

  useEffect(()=>{
    console.log(order)
  },[])

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
            errors={formErrors}
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
