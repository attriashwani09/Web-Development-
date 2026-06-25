//1). Importing express module
const express = require("express") ;



// 2). Creating a server 
const app = express() ;  

// app.use( ( req , res )=>{
//     res.send("Hello Coder Army") ;
// }) 



//3. Creating routes in Express :  
app.use( "/about" , ( req , res) =>{
    res.send( " About Page ..... ") ;
})
 
app.use( "/contact" , ( req , res) =>{
    res.send("Contact Page ..... ") ;
}) 

app.use( "/admin" , ( req , res ) =>{
    res.send("Admin Page ...... ") ;
})

app.use( "/" , ( req , res ) =>{
    res.send("Home Page ...... ") ;
}) 




//4. Listening to server : 
app.listen( 4000 , () =>{
    console.log("Listening at port : 4000 .....") ;
})