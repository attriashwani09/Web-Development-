import React from "react"; 
import ReactDOM from "react-dom/client";
import Counter from "./Components/Counting";   
import { Provider } from "react-redux"; 
import { stores } from "./Store";


function App(){ 

    return( 
        <Provider store={stores} >
        <Counter></Counter> 
        </Provider>
    )


} 

const root =  ReactDOM.createRoot( document.querySelector(".root")) ;

root.render( <App></App>)