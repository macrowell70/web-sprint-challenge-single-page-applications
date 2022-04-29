import React from 'react';

const Confirmation = ({order}) => {
    if (!order) {
        return <h3>Working on adding your order details...</h3>
    }

    return (
        <div>
            <h2>Order Confirmation</h2>
            {order.map(item => {
                return (
                    <div className="order">
                        <h2>{item.fullName}</h2>
                        <p>1 {item.size} pizza with toppings</p>
                    </div>
                )
            })}
        </div>
    )

};

export default Confirmation