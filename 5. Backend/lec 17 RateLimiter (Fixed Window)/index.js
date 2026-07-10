require('dotenv').config()

const express = require("express");
const bcrypt = require("bcrypt") ;
const app = express() ;

const user = require("./Models/user");
const main = require("./database") ; 
const validateUser = require("./utils/validateUser") ;
const cookieParser = require("cookie-parser") ;
const jwt = require("jsonwebtoken") ; 

const authRouter = require("./Routes/Auth") ;
const userRouter = require("./Routes/userRoute") ;
const commentRouter = require("./Routes/comment") ; 
const redisClient = require("./config/redis") ;
const rateLimiter = require("./middleware/RateLimiter") ;



app.use( express.json() ) ; 
app.use( cookieParser() ) ;  // Parsing Cookies  

app.use( rateLimiter ) ;


app.use( "/" , authRouter ) ; 

app.use("/Adhar" , userRouter ) ; 

app.use("/comment" , commentRouter ) ; 



const InitializeConnections = async ()=>{
    
    try{

        // await redisClient.connect() ;
        // console.log("Redis Db connected ......... ") ;

        // await main() ;
        // console.log("MongoDb connected") ; 

        await Promise.all([ redisClient.connect() , main() ]) ;
        console.log("Connected to DB ") ;

        app.listen( process.env.PORT , ()=>{
            console.log("Listening to PORT 5000 ") ;
        })

    } 
    catch( err ){
        console.log("Err : " + err.message ) ;
    }
} 


InitializeConnections() ;

// main()
// .then( ()=>{
//     console.log("Connected to DB ........ ");
//     app.listen( process.env.PORT , ()=>{
//         console.log("Connected at Port 5000 ........... ");
//     })
// }) 
// .catch( (err) => console.log( "Some error Occurred " + err.message ) )


