import React from "react"; 
import ReactDOM from "react-dom/client"; 
import Candidates from "./Voters";


const root = ReactDOM.createRoot( document.querySelector(".root"));


function App(){

    return(
        <>
        <Candidates></Candidates>
        </>
    )
} 


root.render( <App></App>) ;

