import { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { getCartLS, setCartLS } from "../../utilities/localstorage";
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
        setCart([...cart, bottle]);
        setCartLS(bottle.id);
    };

    const handleRemoveFromCart = (id) => {
        const remainingCart = cart.filter((bottle) => bottle.id !== id);
        setCart(remainingCart);
    };

    return (
        <div>
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
