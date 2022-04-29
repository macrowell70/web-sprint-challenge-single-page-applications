import React from 'react';


const Form = () => {



    return (
        <div id="pizza-form">
            <h2>Build Your Own Pizza</h2>
            <form>
                <input 
                id="name-input"
                type="text"
                name="fullName"
                placeholder="Full Name"
                />
                <select id="size-dropdown">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="x-large">The Hunger Destroyer!</option>
                </select>
            </form>
        </div>
    )
}

export default Form