import { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { setCartLS } from "../../utilities/localstorage";

const Bottles = ({ bottlesPromise }) => {
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);

    const handleAddToCart = (bottle) => {
        setCart([...cart, bottle]);
        setCartLS(bottle.id);
    };

    return (
        <div>
            <h1>My Awesome Water Bottles</h1>
            <h3>Bottles: {bottles.length}</h3>
            <h4>Cart: {cart.length}</h4>
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
