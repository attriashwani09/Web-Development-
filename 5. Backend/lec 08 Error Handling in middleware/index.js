const express = require('express') ;

const { Auth } = require("./middleware/Auth") ;

const app = express() ;  



const foodMenu = [
    { id: 1, foodName: "Paneer Butter Masala", category: "veg", price: 250 },
    { id: 2, foodName: "Veg Biryani", category: "veg", price: 180 },
    { id: 3, foodName: "Chicken Biryani", category: "non-veg", price: 280 },
    { id: 4, foodName: "Butter Chicken", category: "non-veg", price: 320 },
    { id: 5, foodName: "Masala Dosa", category: "veg", price: 120 },
    { id: 6, foodName: "Fish Curry", category: "non-veg", price: 350 },
    { id: 7, foodName: "Burger", category: "veg", price: 150 },
    { id: 8, foodName: "Egg Roll", category: "non-veg", price: 100 }
];   


app.use( express.json() ) ;


// app.use( "/admin" , (req , res , next ) => { 

//     // Do changes Internally , Here we need to verify if you are admin or not 
//     // Authentication 

//     const token = "ABCDEF" ;

//     const Access = token === "ABCDEF" ;  

//     if(!Access){
//         res.status( 403 ).send("No Permission !!! ") ; 
//     } 
//     else{
//         next() ;
//     }

// })




// we can globally use Auth for all admins or we can use it seperalety in methods as middleware 
// app.use("/admin", Auth);





app.get( "/food" ,  (req , res ) => {

    console.log("Food Menu Sent ............ ") ;

    res.status( 200 ).send( foodMenu ) ;
})  




app.post( "/admin" ,  Auth ,  (req , res ) => {

    const newItem = req.body ; 

    foodMenu.push( newItem ) ;

    res.status(201).send("Data inserted Successfully .......  ") ;
}) 




app.patch("/admin",  Auth , (req, res) => {
  const info = req.body;

  const food = foodMenu.find((value) => value.id == info.id);

  if ( food ) {

    if (info.foodName) food.foodName = info.foodName;

    if (info.category) food.category = info.category;

    if (info.price) food.price = info.price;

    res.send("Data Updated ............ ");

  } 
  else {
    res.send("Food Item Not Fouund .............  ");
  }
}); 




app.delete( "/admin/:id" ,  Auth  ,  (req , res ) => {

    const id = Number(req.params.id ) ; 

     const index = foodMenu.findIndex((value) => value.id == id );

    if( index != -1 ){
        foodMenu.splice( index , 1 ) ;
        res.send("Food Item Deleted .............. ") ;
    } 
    else{
        res.send("Food Item Not Fouund .............  ");
    }

}) 




// # Error Handling in middleware 

app.get( "/dummy" , ( req , res ) => {

    try{
        JSON.parse("invalid Json");
        res.send("Hello Ji ") ;
    } 
    catch{
        res.send("Some Error Occured ...... ") ;
    }
})



app.listen( 4000 , ()=>{
    console.log("Listening to server 4000 ........... ") ;
})