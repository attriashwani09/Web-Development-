import { useState } from "react"; 
import { useDispatch } from "react-redux" ;
import { addToCart , removeFromCart } from "./cartSlice";

export default function Cards( {value} ){ 

    const  [ purchase , setPurchase ] = useState( false ) ;  


    const dispatch = useDispatch() ;
    
        function UpdateCart(){
    
            if( purchase ){
                setPurchase( ()=> false ) ;  

                dispatch( removeFromCart() ) ;

            } 
            else{
                setPurchase( ()=> true ) ; 

                dispatch( addToCart() ) ;
            }
        }

    return( 
        <div   >

            <h1>{value.Item}</h1> 
            <h1>{value.Price}</h1> 
            <button onClick={ UpdateCart }> { purchase ? "Remove" : "Add"} </button>

        </div>
    )
}