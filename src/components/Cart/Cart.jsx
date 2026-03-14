import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h3>Item(s) In Cart: {cart.length}</h3>
            <h4>
                Cart Quantity:{" "}
                {cart.reduce((total, curr) => total + curr.cartQty || 0, 0)}
            </h4>
            <div className="cart-container">
                {cart.map((bottle) => (
                    <div key={bottle.id}>
                        <img src={bottle.img} title={bottle?.cartQty ?? 1} />
                        <button
                            onClick={() => handleRemoveFromCart(bottle.id)}
                            className="btn-delete"
                        >
                            x
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
