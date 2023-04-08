import React from 'react';

const Cart = ({ cart, handleRemove }) => {
    let message;
    if (cart.length === 0)
        message = <p>please add some products</p>
    return (
        <div>
            <h1>Order summury:{cart.length}</h1>
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button
                    onClick={() => handleRemove(tshirt._id)}
                >X</button></p>)
            }
        </div>
    );
};

export default Cart;