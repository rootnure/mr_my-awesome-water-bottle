import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";

function App() {
    const bottlePromise = fetch("/bottles.json").then((res) => res.json());

    return (
        <>
            <Suspense>
                <Bottles bottlesPromise={bottlePromise}></Bottles>
            </Suspense>
        </>
    );
}

export default App;
