import React, { useContext } from "react";  
import Second from "./Second"; 
import { useState } from "react";
import GlobalContext from "./GlobalContext";

function First( ){ 

    const { count , setCount} = useContext( GlobalContext ) ;

    return( 
        <> 
        <h2> count : {count} </h2> 
        <Second count = {count}  setCount={setCount} />
        </>
    )
} 

export default First ;