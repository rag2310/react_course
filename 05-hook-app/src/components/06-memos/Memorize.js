import React, {useState} from 'react';
import '../02-useEffect/effects.css';
import useCounter from "../../hooks/useCounter";
import Small from "./Small";


const Memorize = () => {

    const {show, setShow} = useState(true);
    const {counter, increment} = useCounter(10);

    return (
        <div>

            <h1>Counter:<Small value={counter}/></h1>
            <button className="btn btn-primary"
                    onClick={increment}>
                +1
            </button>

            <button className="btn btn-outline-primary ml-3"
                    onClick={() => {
                        setShow(!show);
                    }}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    );
};

export default Memorize;