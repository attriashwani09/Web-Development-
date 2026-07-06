const express = require("express");
const bcrypt = require("bcrypt") ;
const app = express() ;

const user = require("./Models/user");
const main = require("./database") ; 
const validateUser = require("./utils/validateUser") ;


app.use( express.json() ) ;  

app.get("/Adhar" , async (req , res ) =>{ 

    try{
        const ans = await user.find({});
        res.send( ans ) ;
    } 
    catch( err ){
        res.send( "Some Errror Occurred ...... " + err.message ) ;
    }

}) 


app.post("/Adhar" , async (req , res) => { 

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


app.get("/Adhar/:id" , async (req , res) =>{ 

    try{
    const id = req.params.id ;

    const User = await user.findById( id );
    res.send( User ) ;
    }
    catch( err ){
        res.send("Some error Occurred ........ " + err.message ) ;
    }
}) 


app.put( "/Adhar" , async (req , res ) =>{ 

    try{
    const { id , ... Update } = req.body ;
    await user.findByIdAndUpdate( id , Update  , { runValidators : true }) ;
    res.send("User Info Updated ............ ") ;
    }
    catch( err ){
        res.send("Some Error Occuerred ......... " + err.message ) ;
    }
}) 


app.delete("/Adhar/:id" , async (req , res ) =>{

    try{
        await user.findByIdAndDelete( req.params.id );
        res.send("User Deleted Successfully ......... ");
    } 
    catch( err ){
        res.send("Some error Occurred ........... " + err.message );
    }
}) 


// Login Pagr : where we can check pass , and then access the info 
app.post( "/login" , async (req , res) =>{

    try {
        const people = await user.findById( req.body._id ) ; 
        
        if (!people) {
            throw new Error("User not found");
        }
        
        req.body.emailId = req.body.emailId.trim().toLowerCase();

        if( people.emailId !== req.body.emailId )
            throw new Error("Invalid Credentials .......... ") ; 

        const isCorrect = await bcrypt.compare(req.body.password , people.password ) ;

        if( ! isCorrect  )
            throw new Error("Invalid Credentials ..........." ) ;

        res.send("Login Successfull " + people ) ;


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


