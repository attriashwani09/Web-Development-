const http = require("http") ;    // Import Http Module

const server = http.createServer( (req , res) =>{    // Creating a server 

    // res.end("Hello Coder Army");  


    // create routing in server 

    if( req.url == "/" ){
        res.end("Hello Coder Army");  
    } 
    else if( req.url == "/about"){
        res.end("This is About Page .");
    } 
    else if( req.url == "/contact"){
        res.end("This is Contact Page .");
    } 
    else{
        res.end( "Error : Page not Found .")
    }
}) 


server.listen( 4000 , ()=>{                        // Here 4000 is port number . LocalHost:4000
    console.log( "I am listening to Server..........") ;    // Listening to server
} );