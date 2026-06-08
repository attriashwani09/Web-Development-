import React from "react"; 
import ReactDOM from "react-dom/client"; 

const root = ReactDOM.createRoot(document.querySelector(".root")) ; 

function Card( props ){

     return ( 
    < div className="cardTemp" style={{border : "2px solid black" , padding : "10px"}} >
        <img src="https://thumbs.dreamstime.com/b/handsome-male-model-fashionable-clothes-walking-street-handsome-male-model-fashionable-clothes-149334433.jpg"  height="190px" width="190px"/> 

        <div className="info" style={{textAlign : "center"}}>

            <div className="dressType"> {props.cloth} </div> 

            <div className="discounts"> {props.offer} </div> 

            <div className="Shop"> Shop Now </div>
        </div>
        
    </div>
 )
}


// In this app function , we are creating all the cards manually . Instead of this we can just create an array of Properties and then use that array to intertate and make different cards .

// function App(){

//     return (
//     // Header 
//     // Main  
//     <div style={{display : "flex" , gap:"10px" , flexWrap : "wrap"}}>
//         <Card  cloth = "T-shirt"   offer ="20-80%"  /> 
//         <Card  cloth = "Jeans"     offer ="40-80%"  /> 
//         <Card  cloth = "Shoes"     offer ="20-40%"  /> 
//         <Card  cloth = "Shirts"    offer ="flat 20%"  /> 
//         <Card  cloth = "Saari"     offer ="flat 50%"  /> 
//         <Card  cloth = "Formals"   offer ="30-50%"  /> 
//         <Card  cloth = "Ethnics"   offer ="10% off"  /> 
//         <Card  cloth = "Casuals"   offer ="Card offers"  />   
//     </div>
    
//     // footer 
//     )
// } 

const arr = [ {cloth : "T-shirt"  , offer :"20-80%"} , {cloth : "Jeans"  , offer :"20 OFF%"} , {cloth : "Shoes"  , offer :"20-40%"} , {cloth : "Shirts"  , offer :"Flat 20% OFF"} , {cloth : "Formals"  , offer :"20-80%"} , {cloth : "Casuals"  , offer :"20-30% OFF"} , {cloth : "Ethnics"  , offer :"20-80%"} ] ;

function App(){

    return (
        
        <div style={{display : "flex" , gap:"10px" , flexWrap : "wrap"}} >
            {

            arr.map( (value , index ) => <Card key = {index}  cloth = {value.cloth}  offer = {value.offer} />  ) 

            }
        </div>
    )
}






root.render( <App/>)