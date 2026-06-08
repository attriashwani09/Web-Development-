import GlobalContext from "./GlobalContext";
import { useContext } from "react";


function Third(){ 

    const { count , setCount} = useContext( GlobalContext ) ;

    return(
        <>
         
         <button onClick={ ()=> setCount( count + 1 )}> Increment </button>
         
        </>
    )
}  

export default Third ;