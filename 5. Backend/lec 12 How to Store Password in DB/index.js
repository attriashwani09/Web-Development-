const bcrypt = require("bcrypt") ;

const Password = "Rohit@123" ; 

// async function Hashing() {

//     console.time("Hash");

//     const hashPass = await bcrypt.hash(Password , 10 );   // Here 10 denotes the total number  of Rounds 
//     console.log(hashPass) ;

//     console.timeEnd("Hash") ;   // It tells the total time of encrytion of Password , 
    
// }  


async function Hashing() {

    const hashPass = await bcrypt.hash(Password , 10 ); 

    const ans = await bcrypt.compare( Password , hashPass ) ;

    console.log( ans ) ;  // true
    
}

Hashing() ;
