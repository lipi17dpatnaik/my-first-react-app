import {useState} from "react";

export function Button() {
    const [age,setAge] = useState(0);

    const increaseAge = () => {
        setAge(age+1);
    }
    return(
        <div className="Button">
        <h1> {age}</h1>
        <button onClick={increaseAge}>Increase Age</button>
        </div>
    )
};