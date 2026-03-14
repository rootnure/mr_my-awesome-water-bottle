import { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
    getCartLS,
    removeCartItemLS,
    setCartLS,
} from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = ({ bottlesPromise }) => {
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);

    useEffect(() => {
        const storedCartLS = getCartLS();
        // console.log(storedCartIDs, bottles);

        const storedCart = [];
        for (const id in storedCartLS) {
            // console.log(id);
            const cartBottle = bottles.find((bottle) => bottle.id === id);
            cartBottle.cartQty = storedCartLS[id];
            cartBottle && storedCart.push(cartBottle);
        }
        // console.log(storedCart);
        setCart(storedCart);
    }, [bottles]);

    const handleAddToCart = (bottle) => {
        const cartQuantity = "cartQty",
            sameItemOldData = cart.find((item) => item.id === bottle.id),
            oldQuantity = sameItemOldData ? sameItemOldData[cartQuantity] : 0,
            newQuantity = oldQuantity ? oldQuantity + 1 : 1;
        bottle[cartQuantity] = newQuantity;
        const newCart = oldQuantity
            ? [...cart.filter((item) => item.id !== bottle.id), bottle]
            : [...cart, bottle];

        setCart(newCart);
        setCartLS(bottle.id);
    };

    const handleRemoveFromCart = (id) => {
        const remainingCart = cart.filter((bottle) => bottle.id !== id);
        setCart(remainingCart);
        removeCartItemLS(id);
    };

    return (
        <div style={{ position: "relative" }}>
            <h1>My Awesome Water Bottles</h1>
            <h3>Bottles: {bottles.length}</h3>
            <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart} />
            <div className="bottles-container">
                {bottles &&
                    bottles.map((bottle) => (
                        <Bottle
                            key={bottle.id}
                            bottle={bottle}
                            handleAddToCart={handleAddToCart}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Bottles;
