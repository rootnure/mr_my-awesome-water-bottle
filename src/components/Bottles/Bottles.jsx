import { use } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = ({ bottlesPromise }) => {
    const bottles = use(bottlesPromise);
    return (
        <div>
            <h1>My Awesome Water Bottles</h1>
            <h3>Bottles: {bottles.length}</h3>
            <div>
                {bottles &&
                    bottles.map((bottle) => (
                        <Bottle key={bottle.id} bottle={bottle} />
                    ))}
            </div>
        </div>
    );
};

export default Bottles;
