const express = require("express");
const bcrypt = require("bcrypt") ;
const app = express() ;

const user = require("./Models/user");
const main = require("./database") ; 
const validateUser = require("./utils/validateUser") ;
const cookieParser = require("cookie-parser") ;
const jwt = require("jsonwebtoken") ;


app.use( express.json() ) ;  
app.use( cookieParser() ) ;  // Parsing Cookies

 

app.get("/UserInfo" , async (req , res) =>{ 

    try{ 

    const payload = jwt.verify( req.cookies.token , "Rohit@123"  ) ;    // verify cookies . It gives payload , which have all the info about User 

    const User = await user.findById( payload._id ) ;

    // console.log( req.cookies ) ;  // Consoling cookie 
    res.send( User ) ; 


    }
    catch( err ){
        res.send("Some error Occurred ........ " + err.message ) ;
    }
}) 



// Login Pagr : where we can check pass , and then access the info 
app.post( "/login" , async (req , res) =>{

    try {


        const people = await user.findOne( {emailId : req.body.emailId} ) ;   // accessed with the Help of email , instead of using id 
        
        if (!people) {
            throw new Error("User not found");
        }
        
        req.body.emailId = req.body.emailId.trim().toLowerCase();

        if( people.emailId !== req.body.emailId )
            throw new Error("Invalid Credentials .......... ") ; 

        const isCorrect = await bcrypt.compare(req.body.password , people.password ) ;

        if( ! isCorrect  )
            throw new Error("Invalid Credentials ..........." ) ; 



        // Jwt Token : ( payload , secret Key , expiresIn )
        const token = jwt.sign({ _id : people._id  , emailId : people.emailId } , "Rohit@123" , {expiresIn : 100 })   // Here the Object is payload and Rahit@123 is Secret Key

        res.cookie("token" , token ) ;   // sending cookie
        res.send("Login Successfull " ) ;


    }
    catch(err){
        res.send("Some error occurred . " + err.message ) ;
    }

} )






main()
.then( ()=>{
    console.log("Connected to DB ........ ");
    app.listen( 5000 , ()=>{
        console.log("Connected at Port 5000 ........... ");
    })
}) 
.catch( (err) => console.log( "Some error Occurred " + err.message ) )


