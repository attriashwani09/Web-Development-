import React from "react"; 
import ReactDOM from "react-dom/client"; 
import {Provider} from "react-redux" ;
import Counter from "./Components/Counting";
import { stores } from "./Components/Store"; 
import { Provider } from "react-redux";
import CustomInput from "./Components/Input"; 

function App(){

    return( 
        <Provider store = {stores} >
            
        <Counter></Counter>  
        <CustomInput></CustomInput>
        </Provider>
    )
} 


const root = ReactDOM.createRoot( document.querySelector(".root")) ;
root.render( <App></App>) ;
