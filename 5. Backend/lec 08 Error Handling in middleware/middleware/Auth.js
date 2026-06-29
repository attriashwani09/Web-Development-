const Auth = ( "/admin" , (req , res , next ) => { 

    // Do changes Internally , Here we need to verify if you are admin or not 
    // Authentication 

    const token = "ABCDEF" ;

    const Access = token === "ABCDEF" ;  

    if(!Access){
        res.status( 403 ).send("No Permission !!! ") ; 
    } 
    else{
        next() ;
    }

})

module.exports = {Auth};