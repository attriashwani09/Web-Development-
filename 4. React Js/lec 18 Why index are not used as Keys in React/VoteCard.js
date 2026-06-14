import { useState } from "react";

export default function Card( {value} ){

    const [ count , setCount ] = useState( 0 ) ; 
    
    return(
        <>
        <h1> {value}: {count}</h1>
        <button onClick={ ()=> setCount(prev => prev + 1) }>Vote</button>
        </>
    )
}