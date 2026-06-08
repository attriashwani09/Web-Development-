import Third from "./third" ;  
import { useContext } from "react";
import GlobalContext from "./GlobalContext"; 

function Second(){ 

    const { count , setCount} = useContext( GlobalContext ) ;

    return(
        <>
        <h2> Multiple of 5 is { count * 5 }</h2> 
        <Third count = {count}  setCount={setCount} />
        <button onClick={ ()=> setCount( count - 1 )}> Decrement </button>
        </>
    )
}  

export default Second ;