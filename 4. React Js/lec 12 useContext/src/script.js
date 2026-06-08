import React, { useContext, useState } from "react"; 
import ReactDOM from "react-dom/client";  
import GlobalContext from "./Components/GlobalContext"; 
import First from "./Components/first";

function App(){  

    const data = useContext( GlobalContext ) ;

    console.log( data ) ; 

    const [ count , setCount ] = useState( 0 ) ;
    

    return(
        <> 
            <h1> My name is { data } .</h1> 

            
            <GlobalContext.Provider  value={ { count : count  , setCount : setCount } }>
            <First ></First> 
            </GlobalContext.Provider>
        </>
    )

} 

const root = ReactDOM.createRoot( document.querySelector(".root")) ;

root.render( <App></App>)