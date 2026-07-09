const express = require("express") ;
const user = require("../Models/user") ;
const jwt = require("jsonwebtoken") ;
const redisClient = require("../config/redis");


const authRouter = express.Router() ; 


// Login Pagr : where we can check pass , and then access the info 
authRouter.post( "/login" , async (req , res) =>{

    try { 

        req.body.emailId = req.body.emailId.trim().toLowerCase();

        const people = await user.findOne( {emailId : req.body.emailId} ) ;   // accessed with the Help of email , instead of using id 
        
        if (!people) {
            throw new Error("User not found");
        }


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

    const { token } = req.cookies ;

    const isBlocked = await redisClient.exists(`token:${ token }`) ; 

    if( isBlocked ){
        throw new Error("Login Link Expired . Please Login Again ") ;
    }

    const payload = jwt.verify( token , process.env.SECRET_KEY  ) ;    // verify cookies . It gives payload , which have all the info about User 

    const User = await user.findById( payload._id ) ;

    // console.log( req.cookies ) ;  // Consoling cookie 
    res.send( User ) ; 


    }
    catch( err ){
        res.send("Some error Occurred ........ " + err.message ) ;
    }
})   



authRouter.post("/logout" , async (req , res ) => { 

    try{   

        const {token} = req.cookies ; 

        await redisClient.set( `token:${ token }` , "Blocked" ) ;

        //await redisClient.expire(`token:${ token }` , 1800 ) ; // here 1800 means token will get deleted after 1800 // Hardcoded 

        // If we want to prevent Hardcoding it : then we can just decode the token and find its exp and provide  that value to  client.expiteAt

        const payload = jwt.decode( token ) ;
        // console.log( payload ) ; // Payload contains : id , email , iat , exp  

        await redisClient.expireAt( `token:${ token }` , payload.exp ) ;

        res.cookie("token" , null , {expires : new Date( Date.now() )}) ;
        res.send("Logout Successfully .......... ") ;
    }
    catch( err ){
        res.send("Some error Occurred .......... " + err.message ) ;
    }
})




module.exports = authRouter ;