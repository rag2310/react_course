import React, {useState, useCallback, useEffect} from 'react';
import '../02-useEffect/effects.css';
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback((num) => {
            setCounter((c) => c + num);
        }, [setCounter]
    );

    useEffect(() => {

    }, [increment]);

    return (
        <div>
            <h1>UseCallback Hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>

        </div>
    );
};

export default CallbackHook;