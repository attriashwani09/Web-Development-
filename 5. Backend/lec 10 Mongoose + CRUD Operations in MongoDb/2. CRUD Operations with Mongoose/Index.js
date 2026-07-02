const express = require("express") ;
const app = express() ;

const {main} = require("./database") ;
const user = require("./Models/users") ; 

app.use( express.json() ) ; 

app.get( "/info" , async ( req , res )=>{

    const data = await user.find({}) ;
    res.send( data ) ;
}) 


app.post( "/info" , async (req , res) => {
    await user.create( req.body ) ; 

    res.send("Data Stored Successfully............") ;
}) 


app.put("/info" , async (req , res ) =>{
    
    const data = req.body ;

    const name = data.name ; 
    const age = data.age ; 

    await user.updateOne({ name : name } , { age : age }) ; 

    res.send("Data Updated Successfully ............ ") ;

}) 


app.delete( "/info/:name" , async (req , res ) =>{
    const name = req.params ; 

    await user.deleteOne( name ) ;

    res.send("User Deleted Successfully ......... ") ;
})



main() 
.then( ()=>{
    console.log("Connected to DB ") ;

    app.listen( 4000 , ()=>{
        console.log("Listening at 4000 ") ;
    })
})
.catch( (err) => console.log( err )) ;