import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export function Contact (){
    const {data: catData , isLoading, isError, refetch} = useQuery(["cat"], ()=>{
        return Axios.get("https://catfact.ninja/fact").then(
            (res)=>res.data?.fact)}
    );
    if(isError) {
        return <div> error </div>
    }
    if(isLoading) {
        return <div> loading </div>
    }

    return (
        <div> Contact Page for cats
        <p> Fact: {catData} </p>
        <button onClick={refetch}> Update Data</button>
        </div>
    )

}