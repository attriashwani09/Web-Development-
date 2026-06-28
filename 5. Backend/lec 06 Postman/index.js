const express = require("express") ;

const app = express() ; 

// Parse data  : to recieve the post data and use it , we have to do parsing 
app.use( express.json() ) ;

app.get( "/" , (req , res ) =>{ 

    res.send({Name : "Ashwani " , Age : 10 }) ;

})  


app.post( "/" , ( req , res ) =>{
    console.log("Get request initiated ..... ") ; 

    console.log(  req.body ) ;

    res.send("Data Saved Successfully ") ;
})


app.listen( 4000 , ()=>{
    console.log("Listening to App ...... ") ;
})