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
            </form>
        </div>
    )
}

export default Form