// Scope in js :
// three types : i) global scope    ii)local/functional scope   iii) block scope 

// 1) Global Scope :  these are accessible everywhere in the program
let a=10;
var b=20;
const c=30; 

console.log(a , b , c); 


// 2) Functional / local Scope :  Accessible only inside that function .

function scope(){
    let a1=100;
    var b1=200;
    const c1=300;

    console.log(a1 , b1 ,c1) ;
} 

scope(); 

//console.log(a1);  // error (we can't access them outside the funtion) 


// 3). Block Scope : accessible only inside the block 

{
    let a2=1000;
    var b2=2000;
    const c2=3000;
} 

// console.log(a2) ; // error 

// here , we are able to access var b2 even outside the block element . 
// due to this reason, there could become some complications in program. 
// so , programmers stoped using var 
console.log(b2) ; 




