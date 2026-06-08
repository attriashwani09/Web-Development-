import React from "react"; 
import ReactDOM from "react-dom/client";  

import { Route , Routes , BrowserRouter , Link } from "react-router-dom"
import Home from "./components/Home";  
import About from "./components/About";
import Contact from "./components/Contact";
import Details from "./components/Details"; 
import NestedDetails1 from "./components/NestedDetails1";
import NestedDetails2 from "./components/NestedDetails2";


function App(){

    return( 
        <>  

        

        <BrowserRouter> 

            <nav>
                <Link to="/"  > Home </Link>
                <Link to="/Contact" > Contact </Link>
                <Link to="/About" > About </Link> 
                <Link to="/Details" > Details </Link>
            </nav> 

            <Routes>
                <Route path="/"  element = { Home() }>  </Route> 
                <Route path="/Contact"  element = { <Contact/> }>  </Route> 
                <Route path="/About" element = { <About/> } >   </Route> 

                <Route path="/Details" element = { <Details/> } > 

                    <Route path="NestedDetails1"  element={ <NestedDetails1/> }></Route>
                    <Route path="NestedDetails2"  element = { <NestedDetails2/> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
} 


const root = ReactDOM.createRoot( document.querySelector(".root")) ;

root.render( <App></App> ) ;

