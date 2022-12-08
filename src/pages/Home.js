import { useContext } from "react";
import { AppContext } from '../App';

export function Home (){
    const { userContact } = useContext(AppContext);
    return (
        <div> Home Page and contact details are {userContact} </div>
    )

}