import { useSelector , useDispatch } from "react-redux" ;  
import { Increment , Decrement , Reset } from "./Slicer1";


export default function Counter(){  

    const count = useSelector( (state) => state.Slice1.count); 
    
    const dispatch = useDispatch() ;

    return(
        <>
            <h1> Count : {count} </h1> 
            <button onClick={ () => dispatch(Increment())}> Increment </button>
            <button onClick={ () => dispatch(Decrement())}> Decrement </button> 
            <button onClick={() => dispatch(Reset())}> Reset </button>
        </>
    )

}