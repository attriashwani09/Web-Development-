const express = require("express") ;
const app = express() ;
const port = 4000 ; 

// Route  Pattern Mofifiers : 
// 1). ?  = Otional Character ( Previous character or group is optional) 
// app.use( "/Ho?me" , (req , res) => {
//     res.send("Home Page .... ") ;
// })  

// For eg : 
// /abcd
// /acd 



// 2). +  = Previous character must appear at least once
// app.use( "/Abo+ut" , (req , res) => {
//     res.send("About Page .... ") ;
// }) 

// For eg : 
// /abcd
// /abbcd
// /abbbcd


// 3). *  = Previous pattern can repeat any number of times (including none)
// app.use( "/con*tact" , (req , res) => {
//     res.send("Home Page .... ") ;
// }) 

// For eg : 
// /abcd
// /abXYZcd
// /ab123cd
// /abcd 


// Note : in Present at Express 5 , they are no longer used .  





// Instead use Route Params : 

// 4). Route Params : 
app.use( "/Home/:id" , (req , res ) => {
    res.send(" Home Page -> " + req.params.id ) ;
})




app.listen( port , ()=>{
    console.log("Backend Running at Port 4000") ;
} )