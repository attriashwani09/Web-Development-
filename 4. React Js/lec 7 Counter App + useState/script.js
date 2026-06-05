import React ,{useState} from "react"; 
import ReactDOM from "react-dom/client" ;

const root = ReactDOM.createRoot( document.querySelector(".root")) ;


function App(){  

    let [count , setCount ]= useState( 0 ) ; 

    function IncreaseCount(){
        count = count + 1 ;   
        setCount( count ) ;
        // document.getElementById("output").innerText = "Count : " + count  ;
        // console.log( count ) ;
    } 

    function DecreaseCount(){
        count = count - 1 ; 
        setCount( count ) ;
        // document.getElementById("output").innerText = "Count : " + count  ; 
        // console.log( count ) ;
    }

    return(
        <div className="container">  
            <div id="output"  className="output"> Count : {count} </div> 
            
            <div>
            <button onClick = {IncreaseCount} >Increment : {count} </button>
            <button onClick = {DecreaseCount} >Decrement : {count} </button> 
            </div> 
            
        </div>
    )
} 


root.render( <App/> ) ;