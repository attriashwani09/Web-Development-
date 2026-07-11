const dotenv = require("dotenv");
dotenv.config(); 

const express = require("express") ;
const askGemini = require('./askGemini') ;

const app = express() ;

app.use( express.json() ) ;


const chatHistory = {} ;  // in Start Empty CHatHistory 



app.post( "/gemini" , async (req , res ) => {

  const { id , msg } = req.body ; 

  if( !chatHistory[id] ){
    chatHistory[id] = [] ;
  }

  const History = chatHistory[id] ;  

  const promptMessage = [ ...History , { role : 'user' , parts : [{ text : msg }]}] ;

  const answer = await askGemini( promptMessage ) ;

  // Adding cuurent context in ChatHistory 
  History.push( { role : 'user' , parts : [{ text : msg }]}) ;
  History.push( { role : 'model' , parts : [{ text : answer }]}) ;


  res.send( answer ) ;


})







app.listen( process.env.PORT , ()=>{
  console.log("App is Listening at PORT .......... ") ;
})

