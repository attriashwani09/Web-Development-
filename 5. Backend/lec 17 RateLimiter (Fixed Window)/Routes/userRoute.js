const express = require("express") ;
const user = require("../Models/user") ;
const validateUser = require("../utils/validateUser") ;
const bcrypt = require("bcrypt") ;


const userRouter = express.Router() ;

userRouter.get("/" , async (req , res ) =>{ 

    try{
        const ans = await user.find({});
        res.send( ans ) ;
    } 
    catch( err ){
        res.send( "Some Errror Occurred ...... " + err.message ) ;
    }

})  


userRouter.post("/" , async (req , res) => { 

    try{  

        validateUser( req.body ) ;
        
        req.body.password = await bcrypt.hash( req.body.password , 10 ) ;

        await user.create(req.body);

        res.send("Adhar User Created ................ ") ;
    }
    catch(err){
        res.send("Some Error Occured ......... " + err.message ) ;
    }

})  


userRouter.put( "/" , async (req , res ) =>{ 

    try{
    const { id , ... Update } = req.body ;
    await user.findByIdAndUpdate( id , Update  , { runValidators : true }) ;
    res.send("User Info Updated ............ ") ;
    }
    catch( err ){
        res.send("Some Error Occuerred ......... " + err.message ) ;
    }
}) 


userRouter.delete("/:id" , async (req , res ) =>{

    try{
        await user.findByIdAndDelete( req.params.id );
        res.send("User Deleted Successfully ......... ");
    } 
    catch( err ){
        res.send("Some error Occurred ........... " + err.message );
    }
})  


module.exports = userRouter ;
