import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
          <h1>Bloomtech Eats</h1>
          <p>Satisfy your hunger</p>
          <Link id="order-pizza" to="/pizza"><button>Get Started!</button></Link>
        </div>
    )

};

export default Home