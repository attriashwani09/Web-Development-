import { useDispatch } from "react-redux" ;
import { customIncrement, Increment } from "./Slicer1";
import { useState } from "react";

export default function customInput(){  

    const [value , setValue ] = useState( "" ) ;

    const dispatch = useDispatch() ;


    return(
        <>
            <input type="number" placeholder="Enter Value "  onChange={ (e)=> setValue( e.target.value) }  />
            <button onClick={ () => { dispatch(customIncrement(Number(value)))}}>Submit</button>
        </>
    )
}