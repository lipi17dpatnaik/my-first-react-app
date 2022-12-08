import { useState } from 'react';
import Axios from 'axios';

export function Cats() {
    const [catFact, setCatFact] = useState("")

    const fetchCatFact=() => {Axios.get("https://catfact.ninja/fact").then((res)=>
        {setCatFact(res.data.fact);}
    )}
    // fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>console.log(data))
    // Axios.get("https://catfact.ninja/fact").then((res)=>{setCatFact(res.data.fact);})
    return (
        <div>
        <button onClick={fetchCatFact}> Generate Cat Facts</button>
        <p> {catFact}</p>
        </div>
    )
}