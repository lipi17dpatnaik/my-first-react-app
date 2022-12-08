import { useState } from 'react';
import Axios from 'axios';

export function PredictAge() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)

    const fetchPredictAgeData=() => {Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>
        {setAge(res.data.age);}
    )}
   
    const changeName = (event) => {
        setName(event.target.value)
    }

    return (
        <div>
        <input onChange={changeName}></input>
        <button onClick={fetchPredictAgeData}> Predict Age</button>
        <p> Name: {name} </p>
        <p> Age: {age} </p>
        </div>
    )
}