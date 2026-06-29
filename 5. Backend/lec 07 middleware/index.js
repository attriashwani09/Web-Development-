const express = require("express") ;

const app = express() ; 


// Middleware : it is the code that runs between request and response 

// middleware 1 
app.use( "/home" , (req , res , next) =>{ 

    console.log("Log stored : ")

    console.log(` Event log :- Time :  ${Date.now()}  , Url :  ${req.url}  ,  Method : ${req.method}`) ;

    next() ;
}) 


// middleware 2
app.get( "/home" , (req , res , next) =>{ 

    console.log("First") ;

    next() ;

}) 

// middleware 3
app.get( "/home" , (req , res , next) =>{ 

    console.log("Second") ;

    next() ;

})

// Request Handler : it gives the final response 
app.get( "/home" , (req , res ) =>{ 

    console.log("Third") ; 

    res.send("Response Sent ........... ") ;

   

})


app.listen( 5000 , ()=>{
    console.log("Listening to server at 5000............") ;
})
 



