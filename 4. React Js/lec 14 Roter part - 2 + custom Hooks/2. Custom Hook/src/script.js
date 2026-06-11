import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom" ; 
import  useCounter from "./components/useCounter";


function App(){  

    const { count , Increment , Decrement } =  useCounter(  ) ;

    return(
        <> 
        <h1> Count : { count } </h1> 
        <button onClick={ Increment }> Increment </button>
        <button  onClick={Decrement }> Decrement</button>
        </>
    )


} 

const root = ReactDOM.createRoot( document.querySelector(".root")) ;
root.render( <App></App>) ;