

console.log("This is Second File");

function sum( a , b ){
    console.log( a + b ) ;
}  


function sub( a , b ){
    console.log( a - b ) ;
} 



module.exports = { sum , sub } ; 


// module.exports : it is used to export the file 
// basically module.exports is an empty object 
// we can pass function and key - value pairs here 
