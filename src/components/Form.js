import React from 'react';
import * as yup from 'yup';

const formSchema = yup.object().shape({
    fullName: yup
    .string()
    .trim()
    .required("Please enter your full name")
    .min(2, "name must be at least 2 characters"),
})


const Form = () => {



    return (
        <div id="pizza-form">
            <h2>Build Your Own Pizza</h2>
            <form>
                <input 
                    id="name-input"
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                />
                <label>Pick your size
                    <select id="size-dropdown">
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="x-large">The Hunger Destroyer!</option>
                    </select>
                </label>
                <div className="checkbox-container">
                    <label>Peppperoni
                        <input type="checkbox"/>
                    </label>
                    <label>Italian Sausage
                        <input type="checkbox"/>
                    </label>
                    <label>Bacon
                        <input type="checkbox"/>
                    </label>
                    <label>Mushrooms
                        <input type="checkbox"/>
                    </label>
                    <label>Onion
                        <input type="checkbox"/>
                    </label>
                    <label>Green Pepper
                        <input type="checkbox"/>
                    </label>
                    <label>Anchovis
                        <input type="checkbox"/>
                    </label>
                </div>
                <input
                    id="special-text" 
                    type="text"
                    name="special"
                    placeholder="Please add any additional instructions here"
                />
                <button id="order-button">Add to Order</button>
            </form>
        </div>
    )
}

export default Form