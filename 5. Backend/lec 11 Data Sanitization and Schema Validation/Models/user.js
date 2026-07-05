const mongoose = require("mongoose") ;
const { type } = require("node:os");
const {Schema} = mongoose ; 

const userSchema = new Schema({
    name : {
        type : String ,
        required : true , 
        minLength : 3 , 
        maxLength : 15
    } , 

    gender : {
        type : String , 
        // 1st way to validate : It was for verifying , if the rquest have these genders only . If anu other gender is tried to save , then it will not get registered .
        // enum : ["Male" , "Female" , "Others"]  

        // 2nd way to validet is :  
        validate(value){
            if( !["Male" , "Female" , "Others"] .includes(value)  )
                throw new Error("Invalid Gender >>>> ");
        }
    },

    age : {
        type : Number , 
        min : 14 , 
        max : 70
    } ,

    city : {
        type : String 
    } , 

    emailId : {
        type : String ,
        required : true , 
        unique : true  , 
        trim : true , 
        lowercase : true , 
        immutable : true 
    } , 

    Photo : {
        type : String , 
        default : "This is a default Phhoto."
    } , 

    
} , {timestamps : true } ) 


const user = mongoose.model( "user" , userSchema ) ; 

module.exports =  user ;