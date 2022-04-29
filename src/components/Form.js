import React from 'react';
import * as yup from 'yup';

const formSchema = yup.object().shape({
    fullName: yup
    .string()
    .trim()
    .required("Please enter your full name")
    .min(2, "name must be at least 2 characters"),
})


const Form = (props) => {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    }

    return (
        <div id="pizza-form">
            <h2>Build Your Own Pizza</h2>
            <form onSubmit={onSubmit}>
                <input 
                    id="name-input"
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    onChange={onChange}
                />
                <label>Size matters
                    <select 
                        id="size-dropdown" 
                        name="size"
                        onChange={onChange}
                        value={values.size}
                    >
                        <option value="" >--Choose Your Size--</option>
                        <option value="small" >Small</option>
                        <option value="medium" >Medium</option>
                        <option value="large" >Large</option>
                        <option value="x-large" >The Hunger Destroyer!</option>
                    </select>
                </label>
                <div className="checkbox-container">
                    <label>Peppperoni
                        <input
                            type="checkbox"
                            name="pepperoni"
                            onChange={onChange}
                        />
                    </label>
                    <label>Italian Sausage
                        <input
                            type="checkbox"
                            name="sausage"
                            onChange={onChange}
                        />
                    </label>
                    <label>Bacon
                        <input
                            type="checkbox"
                            name="bacon"
                            onChange={onChange}
                        />
                    </label>
                    <label>Mushrooms
                        <input
                            type="checkbox"
                            name="mushrooms"
                            onChange={onChange}
                        />
                    </label>
                    <label>Onion
                        <input
                            type="checkbox"
                            name="onion"
                            onChange={onChange}
                        />
                    </label>
                    <label>Green Pepper
                        <input 
                            type="checkbox"
                            name="greenPepper"
                            onChange={onChange}
                        />
                    </label>
                    <label>Anchovies
                        <input 
                            type="checkbox"
                            name="anchovies"
                            onChange={onChange}
                        />
                    </label>
                </div>
                <input
                    id="special-text" 
                    type="text"
                    name="special"
                    placeholder="Please add any additional instructions here"
                    onChange={onChange}
                />
                <button id="order-button">Add to Order</button>
            </form>
        </div>
    )
}

export default Form