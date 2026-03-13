import { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ bottlesPromise }) => {
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);

    const handleAddToCart = (bottle) => {
        console.log(bottle);
    };
    return (
        <div>
            <h1>My Awesome Water Bottles</h1>
            <h3>Bottles: {bottles.length}</h3>
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
