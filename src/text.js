import {useState, useEffect} from "react";

export function Input() {
    const [text,setText] = useState("");

    const changeText = (event)=> {
        setText(event.target.value)
    }

    useEffect(()=> {console.log("mounted")},[]) // for only mounting

    useEffect(()=> {console.log("for text update")},[text]) // for when text updates

    useEffect(()=> { console.log("mounted")
                     return()=>{console.log("unmounted")}
                    },
                      [])

    return(
        <div className="Input">
        <input onChange={changeText}>
        </input>
        <h1> {text} </h1>
        </div>
    )
};