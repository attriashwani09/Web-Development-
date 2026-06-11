import React from "react"; 
import ReactDOM from "react-dom/client"; 
import {BrowserRouter, Link, Route , Routes } from "react-router-dom" ; 
import Home from "./components/Home"; 
import Github from "./components/Github";

function App(){

    return(
        <> 
        <BrowserRouter>  

        <nav>
            <Link to="/"> Home </Link>
            <Link to="/Github/" > Github </Link>
        </nav>
            <Routes>
                <Route path="/" element={ <Home></Home> }></Route> 

                <Route path="/Github/:name" element={ <Github></Github> }></Route>
            </Routes>
        </BrowserRouter> 
        </>
    )
} 

const root = ReactDOM.createRoot( document.querySelector(".root"));

root.render( <App></App> ) ;