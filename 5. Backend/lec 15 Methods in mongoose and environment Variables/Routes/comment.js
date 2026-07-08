const express = require("express") ;

const commentRouter = express.Router() ; 


commentRouter.get( "/" , (req , res) =>{
    res.send("Comment Info ...... ") ;
}) 

commentRouter.post( "/" , (req , res) => {
    res.send( "Comment Added ............ ") ;
}) 


commentRouter.put( "/" , (req , res) => {
    res.send("Comment Updated ........ ") ;
}) 

commentRouter.delete( "/" , (req , res) => {
    res.send(" Comment Deleted ........ ") ;
}) 



module.exports = commentRouter ;