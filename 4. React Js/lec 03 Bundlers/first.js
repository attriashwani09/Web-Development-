
// Giving attributes to eleemmnts in React 

const element1 = React.createElement(
    "h1" , 
    { 
        id: "first" , 
        className : "Demo" , 
        style : 
        {
            backgroundColor : "pink" ,
            color : "white" , 
            fontSize : "30px" , 
            padding : "20px"
        }
    } , 
    "Hello Coder Army "
);  



const element2 = React.createElement(
    "h1" , // tag name 
    { 
        id: "second" , 
        className : "Demo" , 
        style : 
        {
            backgroundColor : "Blue" ,     // Attributes 
            color : "white" , 
            fontSize : "30px" , 
            padding : "20px"
        }
    } , 
    "How are you"   // info 
); 

const root = ReactDOM.createRoot( document.getElementById("root") ) ; 

// root.render( element1 ) ; 
// root.render( element2 ) ; 


// As we see , if we try to render element1 and element2 seperately , one overwrites the other ( means only element2 is vissible ) . 
// So to overcome this problem , we have to create a seperate div  , then pass element1 and 2 in an array at info column  


const div1 = React.createElement("div" , {} , [element1 , element2]) ;

root.render( div1 ) ; 


// This type of Programming , becomes difficult write and maintain code 
// again to overcome this , we can Use JXS  
// JSX (JavaScript XML) : is a syntax used in React to write HTML-like code inside JavaScript.

