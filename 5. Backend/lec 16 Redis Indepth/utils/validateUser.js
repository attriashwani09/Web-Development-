const Validator = require("validator") ;
const User = require("../Models/user") ;

function validateUser( data ){ 

    const mandatoryField = ['name' , 'emailId' , 'age' , 'password'] ; 

    const isAllowed = mandatoryField.every( (k) => Object.keys(data).includes(k)) ;

    if(!isAllowed){
        throw new Error("Fields Missing ........... ") ;
    } 

    if(!Validator.isEmail(data.emailId)){
        throw new Error("Invalid email Id ....... ") ;
    } 

    if( !Validator.isStrongPassword(data.password)){
        throw new Error("Weak Password .......... ") ;
    } 

    if( ! ( data.name.length >=3 && data.name.length <= 15 ) ){
        throw new Error("name length should be greater than  equal to 3 and less than equal to 15 ") ;
    } 

    if( !(data.age >=14 )){
        throw new Error("You are a minor ............. ") ;
    }


} 


module.exports = validateUser ;