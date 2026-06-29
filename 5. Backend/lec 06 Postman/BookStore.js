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

app.get("/book", (req, res) => {

    const author = req.query.author;   // read query

    // If query exists → filter books
    if (author) {
        const books = BookStore.filter(
            (value) => value.author === author
        );

        console.log("Filtered books sent...");
        return res.send(books);
    }

    // If no query → send all books
    console.log("Full BookStore sent...");
    res.send(BookStore);
});  



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


app.patch( "/book" , (req , res) => {

    const data = req.body ;  

    const Book = BookStore.find( (value) => value.id === data.id ) ;

    if( Book ){
        Book.bookName = data.bookName ;
    }

    // console.log( data ) ; 

    res.send( "Data Patched Successfully ......... ") ;
}) 


app.put( "/book" , (req , res ) => { 

    const data = req.body ;  

    const Book = BookStore.find( (value) => value.id === data.id ) ;

    if( data.bookName ){
        Book.bookName = data.bookName ;
    } 

    if( data.author ){
        Book.author = data.author ;
    }

    // console.log( data ) ; 

    res.send( "Data Putted Successfully ......... ") ;

})


app.delete( "/book" , ( req , res ) =>{
    console.log( req.query) ; // we sent dlelte info in query 

    const index = BookStore.findIndex( (value) => value.bookName === req.query.bookName ) ;

    BookStore.splice( index , 1 ) ;

    res.send("Data Deleted successfully ............. ");

}) 





app.listen( 4000 , ()=>{
    console.log("Listening Server at Port 4000 ........  ") ;
})