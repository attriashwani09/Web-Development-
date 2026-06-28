const express = require("express") ;

const app = express(); 

const BookStore =  [
  {  id: 1, bookName: "The Alchemist",  author: "Paulo Coelho" },
  {  id: 2, bookName: "Atomic Habits",  author: "James Clear"  },
  {  id: 3, bookName: "Rich Dad Poor Dad", author: "Robert Kiyosaki" }, 
  {  id: 4, bookName: "Think and Grow Rich", author: "Napoleon Hill" },
  {  id: 5, bookName: "Ikigai",   author: "Hector Garcia" }
]; 

// Parsing The Data 
app.use( express.json() ) ; 


// Get req : to get the Full BookStore Info

app.get( "/book" , (req , res) =>{ 

    console.log( "BookStore Data Sent Successfully .......... ") ; 

    res.send( BookStore ) ;

})   



// Get Req : to get single book information dynamically with the help of id 

app.get( "/book/:id" , (req , res) => {
    console.log("Book Info Sent ...... ") ;

    const id = Number(req.params.id) ;

    const book = BookStore.find((value) => value.id === id);

    if (book) {
        res.send(book);
    } else {
        res.send("Book not found");
    }

    
}) 


// Post Request : Means adding new book to collection
app.post( "/book" , ( req , res ) => {
    const newBook = req.body ; 

    BookStore.push( newBook ) ; 

    res.send("Data Store Successfully ....... ") ;
})



app.listen( 4000 , ()=>{
    console.log("Listening Server at Port 4000 ........  ") ;
})