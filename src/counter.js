import {useState} from "react";

export function Counter() {
    const [count,setCount] = useState(0);

    const increaseCount = () => {
        setCount(count+1)
    }
    const decreaseCount = () => {
        setCount(count-1)
    }
    const zeroCount = () => {
        setCount(0)
    }

    return(
        <div className="Button">
        <button onClick={increaseCount}>Increase Count</button>
        <button onClick={decreaseCount}>Decrease Age</button>
        <button onClick={zeroCount}>Set to Zero</button>
        {count}
        </div>
    )
};