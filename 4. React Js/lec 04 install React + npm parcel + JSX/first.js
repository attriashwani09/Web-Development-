import React from "react"; 
import ReactDOM from "react-dom/client";
// Giving attributes to eleemmnts in React  


// Now we will create elements with the help of JSX  


// 1).  When we render these elements seperately , only one element gets rendered 

// const newElement = <h1 id="first" className="demo" > Hello Coder Army </h1> 

// const element2 = <h2 id="second"  className="demo" > How are you </h2>

const root = ReactDOM.createRoot( document.getElementById("root") ) ; 


// root.render( newElement ) ;  

// root.render( element2 ) ;



// 2). JUst Create a div element and place as many elements as you want 

// const element1 =( <div>  
//                 <h1 id="first"> Hello Coder Army </h1>
//                 <h2 id="second"> How are you </h2>
//                 </div>
// )   



// 3). we can also use an empty element 
// const element1 =( <>  
//                 <h1 id="first"> Hello Coder Army </h1>
//                 <h2 id="second"> How are you </h2>
//                 </>
// )  




// 4). We can also use Js expressions in JSX code  : JUst add the expression inside {}

const names = "Rahul Sharma" ;

const info ={
    age : 74 
} ;


const stylesObj = {
    backgroundColor : "Orange" ,
    color : "black"
} ;

// IN h2 we directly passed style object 
// const element1 =( <>  
//                 <h1 id="first"  style={ stylesObj}> My name is {names}  </h1>
                 
//                 <h2 id="second" style={ { backgroundColor : "Orange" , color : "black" }}> My age is {info.age} </h2>  
//                 </>
// )  





// 5). React Components : function based components 

function greet(){

    return <h1 id="first"> Good Morning </h1> ;
} 


function meet(){

    return <h2 id="second" > Kaise ho app </h2>
} 


const element1 = <> { greet() }  { meet() }</>





root.render( element1 ) ;