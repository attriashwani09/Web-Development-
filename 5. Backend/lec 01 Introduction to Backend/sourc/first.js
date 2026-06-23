import sum from "./second.js";


// to use import export instead of require and module.exports , we can either use mjs instead of js  
// or  we can use  a package.json  with type : "module" 
// bth ways work  


console.log( "this is 1st file ..... ") ;

sum( 10 , 20 ) ; 


// Output : 
// this is 2nd file ...... 
// this is 1st file ..... 
// 30
