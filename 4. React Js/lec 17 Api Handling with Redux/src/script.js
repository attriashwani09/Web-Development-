import React from "react"; 
import ReactDOM from "react-dom/client"; 
import {Provider} from "react-redux" ;  
import store from "./components/store"; 
import CryptoComponent from "./components/Crypto";


function App(){ 


    return (
        <> 

        <Provider  store={store} >
            <CryptoComponent/>
        </Provider>
        
        </>
    )


} 

const root = ReactDOM.createRoot( document.querySelector(".root")) ;

root.render( <App></App>) ;