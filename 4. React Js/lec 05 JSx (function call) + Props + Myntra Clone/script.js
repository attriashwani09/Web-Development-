import React from "react"; 
import ReactDOM from "react-dom/client";  

const root = ReactDOM.createRoot( document.querySelector(".root")) ;

// 1).  Function Call IN JSX : 
// To use function call in JSX , function name's first letter should be capital  

// function Greet(){

//     return <h1> Hello Coder Army </h1>

// } 


// const element = <Greet/>   // Used self closing Tag with Function name inside it  




// 2). props : These are used to pass arguments in functions in JSX 
// Props is an object 

function Greet(props){ 

    // console.log(props) ;

    return (
        <>
        <h1>Hello My name is {props.name} </h1>
        <h2>My age is { props.age } </h2>
        </>
    )
} 

const element = <Greet name="Ashwani"  age = "22" />  // Pass arguments just like attribures in HTML 


// If we console.log(props) , we get object : 
// {name: 'Ashwani', age: '22'}

root.render( element ) ;

