import React, { useEffect, useState } from "react"; 
import ReactDOM from "react-dom/client";  
import ColorChanger from "./Components/ColorChanger"; 

const root = ReactDOM.createRoot(document.querySelector(".root")) ;


function App(){ 
    
    const [ count , setCount ] = useState( 0 ) ; 

    console.log( count ) ;

    return( 

        <> 

        <div className="container"> 
            <h1>Count : {count} </h1>

            <button onClick={()=> setCount(count + 1 ) }>Increment</button>

        </div> 

        <ColorChanger name = "Dummy" ></ColorChanger>

        
        </>

    )

    

}  




root.render( <App></App>)