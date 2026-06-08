import React from "react"; 
import ReactDOM from "react-dom/client"; 

const root = ReactDOM.createRoot(document.querySelector(".root")) ;

function Card(){

     return ( 
    < div className="cardTemp" >
        <img src="https://thumbs.dreamstime.com/b/handsome-male-model-fashionable-clothes-walking-street-handsome-male-model-fashionable-clothes-149334433.jpg"  height="200px" width="200px"/> 

        <div className="info">

            <div className="dressType"> Casual Wear </div> 

            <div className="discounts"> 20 - 80 % </div> 

            <div className="Shop"> Shop Now </div>
        </div>
        
    </div>
 )
}

function App(){

    return (
        <>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </>
    )
}


root.render( <App/>)