const fs = require("fs") ;

// Libuv : It is a high - performance , cross platform C library for asychronous I/O and event driven programming.
// It was originally developed for Nodejs and is now used by many other projects. 

let a = 10 ;
let b = "Hello ji .... " ; 

console.log( b ) ;


function sum( a , b ){
    console.log( "Sum : " , a + b ) ;
}  

fs.readFile( "./data.json" , "utf-8" , ( err , res) =>{
    console.log(res) ;
})


setTimeout( ()=>{
    console.log( "Timeout Implemented ...... ") ;
} , 3000 ) ;

console.log( a ) ; 

sum( 10 , 20 ) ; 



// Output : 

// Hello ji .... 
// 10
// Sum :  30
// {
//     "Name" : "Ashwani" , 
//     "Age" : 22 , 
//     "text" : "Hello Coder Army"
// }
// Timeout Implemented ...... 