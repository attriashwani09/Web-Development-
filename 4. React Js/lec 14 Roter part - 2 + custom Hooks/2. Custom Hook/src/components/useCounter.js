import { useState } from "react";


export default function  useCounter( initialValue = 0   ){

    let [ count , setCount ] = useState( initialValue ) ;

    function Increment() {

        setCount( prev => prev + 1 ) ; 
    } 


    function Decrement(){

        setCount( prev => prev - 1 )  ;
    } 


    return( { count , Increment , Decrement }) ;
}