const express = require("express") ;
const user = require("../Models/user") ;
const jwt = require("jsonwebtoken") ;


const authRouter = express.Router() ; 


// Login Pagr : where we can check pass , and then access the info 
authRouter.post( "/login" , async (req , res) =>{

    try { 

        req.body.emailId = req.body.emailId.trim().toLowerCase();

        const people = await user.findOne( {emailId : req.body.emailId} ) ;   // accessed with the Help of email , instead of using id 
        
        // if (!people) {
        //     throw new Error("User not found");
        // }


        const isCorrect = people.verifyUser( req.body.password ) ;

        if( ! isCorrect  )
            throw new Error("Invalid Credentials ..........." ) ; 



        // Jwt Token : ( payload , secret Key , expiresIn )
        const token = people.getJWT() ;

        res.cookie("token" , token ) ;   // sending cookie
        res.send("Login Successfull " ) ;


    }
    catch(err){
        res.send("Some error occurred . " + err.message ) ;
    }

} ) 


authRouter.get("/UserInfo" , async (req , res) =>{ 

    try{ 

    const payload = jwt.verify( req.cookies.token , process.env.SECRET_KEY  ) ;    // verify cookies . It gives payload , which have all the info about User 

    const User = await user.findById( payload._id ) ;

    // console.log( req.cookies ) ;  // Consoling cookie 
    res.send( User ) ; 


    }
    catch( err ){
        res.send("Some error Occurred ........ " + err.message ) ;
    }
})   



authRouter.post("/logout" , (req , res ) => { 

    try{ 
    res.cookie("token" , null , {expires : new Date( Date.now() )}) ;
    res.send("Logout Successfully .......... ") ;
    }
    catch( err ){
        res.send("Some error Occurred .......... " + err.message ) ;
    }
})




module.exports = authRouter ;