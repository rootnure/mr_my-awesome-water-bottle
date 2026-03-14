import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h3>Added To Cart: {cart.length}</h3>
            <div className="cart-container">
                {cart.map((bottle) => (
                    <div>
                        <img
                            key={bottle.id}
                            src={bottle.img}
                            title={bottle?.cartQty ?? 1}
                        />
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
