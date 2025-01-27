import React from 'react';





const Form = (props) => {
    const {
        values,
        submit,
        change,
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
            <div className="image-container">
                <img src="/assets/Pizza.jpg" alt="delicious looking pizza" />
            </div>
            <form onSubmit={onSubmit} className="pizza-form">
                <div className="error-message">
                    <div>{errors.fullName}</div>
                    <div>{errors.size}</div>
                </div>
                <input 
                    id="name-input"
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    onChange={onChange}
                    value={values.fullName}
                />
                <label>Size matters<br/>
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
                            value={values.pepperoni}
                        />
                    </label>
                    <label>Italian Sausage
                        <input
                            type="checkbox"
                            name="sausage"
                            onChange={onChange}
                            value={values.sausage}
                        />
                    </label>
                    <label>Bacon
                        <input
                            type="checkbox"
                            name="bacon"
                            onChange={onChange}
                            value={values.bacon}
                        />
                    </label>
                    <label>Mushrooms
                        <input
                            type="checkbox"
                            name="mushrooms"
                            onChange={onChange}
                            value={values.mushrooms}
                        />
                    </label>
                    <label>Onion
                        <input
                            type="checkbox"
                            name="onion"
                            onChange={onChange}
                            value={values.onion}
                        />
                    </label>
                    <label>Green Pepper
                        <input 
                            type="checkbox"
                            name="greenPepper"
                            onChange={onChange}
                            value={values.greenPepper}
                        />
                    </label>
                    <label>Anchovies
                        <input 
                            type="checkbox"
                            name="anchovies"
                            onChange={onChange}
                            value={values.anchovies}
                        />
                    </label>
                </div>
                <input
                    id="special-text" 
                    type="text"
                    name="special"
                    placeholder="Please add any additional instructions here"
                    onChange={onChange}
                    value={values.special}
                />
                <button id="order-button">Add to Order</button>
            </form>
        </div>
    )
}

export default Form