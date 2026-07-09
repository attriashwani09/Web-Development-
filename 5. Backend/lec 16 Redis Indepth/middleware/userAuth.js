
function userAuth() {

    const people = await user.findOne( {emailId : req.body.emailId} ) ;   // accessed with the Help of email , instead of using id 
        
    if (!people) {
        throw new Error("User not found");
    }


    const isCorrect = people.verifyUser( req.body.password ) ;

    if( ! isCorrect  )
        throw new Error("Invalid Credentials ..........." ) ; 

}  


module.exports = userAuth ;
