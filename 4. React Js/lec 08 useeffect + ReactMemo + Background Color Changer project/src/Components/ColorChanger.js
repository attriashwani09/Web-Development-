import React, { useEffect, useState } from "react"; 

function ColorChanger( {name} ){

    const [color , setColor ] = useState( "black ") ;  

    console.log( name ) ;  



    useEffect( ()=>{  

        console.log("Use State Executed") ;

        document.body.style.backgroundColor = color ;

    } , [ color ]) ; 

            

    return( 
        <> 
            <h1> Background Color Changer</h1>

            <div className="options"> 
                <button style={{backgroundColor : "red"}} onClick={ ()=> setColor("red") }  > Red </button> 
                <button style={{backgroundColor : "blue"}} onClick={ ()=> setColor("blue") } > Blue </button>
                <button style={{backgroundColor : "orange"}} onClick={ ()=> setColor("orange") } > Orange </button>
                <button style={{backgroundColor : "green"}} onClick={ ()=> setColor("green") } > Green </button>
                <button style={{backgroundColor : "pink"}} onClick={ ()=> setColor("pink") } > Pink </button>
                
            </div>
        </>
    ) 

} 

export default React.memo(ColorChanger); 

// React.memo() : used for memorization . Stops re-rendering on component untill any changes to props are made or Function is called (used) Directly .