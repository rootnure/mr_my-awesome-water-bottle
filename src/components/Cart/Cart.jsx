import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div className="sticky-container">
            <h3>Item(s) In Cart: {cart.length}</h3>
            <h4>
                Cart Quantity:{" "}
                {cart.reduce((total, curr) => total + curr.cartQty || 0, 0)}
            </h4>
            <div className="cart-container">
                {cart.map((bottle) => (
                    <div key={bottle.id}>
                        <figure>
                            <img
                                src={bottle.img}
                                title={bottle?.cartQty ?? 1}
                            />
                        </figure>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "0 4px",
                            }}
                        >
                            <p>x{bottle.cartQty ?? 1}</p>
                            <button
                                onClick={() => handleRemoveFromCart(bottle.id)}
                                className="btn-delete"
                            >
                                x
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
