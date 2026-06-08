import React, { use, useRef, useState } from "react"; 
import ReactDOM from "react-dom/client"; 


const root = ReactDOM.createRoot(document.querySelector(".root")) ;


function App(){   

    const [ time , setTime ] = useState( 0 ) ; 

    const refInterval = useRef( null ) ;

    function Start(){  

        console.log( time ) ; 

        if( refInterval.current === null )

         refInterval.current = setInterval( ()=>{ 
            
            setTime((prev) => prev + 1  ); 

        } , 1000 ); 

    }  


    function Stop(){ 

        if( refInterval.current != null ) {

        clearInterval( refInterval.current ) ;  

        refInterval.current = null;

        }

        

    } 

    function Reset(){ 

        

        clearInterval( refInterval.current ) ;   
        
        if( refInterval != null )
            refInterval.current = null;

        setTime( 0 ) ; 

    }

    

    return (
        <>
        <h1> Time is : { time } </h1> 

        <div className="But"> 
            <button onClick={  ()=> Start()  }>  Start </button> 
            <button onClick={ ()=> Stop() }> Stop </button>
            <button onClick={ ()=> Reset() }> Reset </button>
        </div>
        </>
    )
}






root.render( <App></App>) ;