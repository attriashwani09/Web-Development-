import React , {useState , useEffect} from "react"; 
import ReactDOM from "react-dom/client"; 
import Body from "./components/Body"; 
import Header from "./components/Header";

const root = ReactDOM.createRoot( document.querySelector(".root")) ;

function ProfileGenerator(){  


    return(
    <>
        <Header></Header>
        <Body></Body>

    </>
    )
} 

root.render( <ProfileGenerator></ProfileGenerator>) ; 
