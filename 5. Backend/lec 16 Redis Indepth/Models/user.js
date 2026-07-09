const mongoose = require("mongoose") ;
const { type } = require("node:os");
const {Schema} = mongoose ;  
const jwt = require("jsonwebtoken") ;
const bcrypt = require("bcrypt") ;

const userSchema = new Schema({
    name : {
        type : String 
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
        type : Number
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

    password : {
        type : String , 
        required : true 
    }

    
} , {timestamps : true } )  


// Methods in Schema 
userSchema.methods.getJWT = function(){
    const ans = jwt.sign({ _id : this._id  , emailId : this.emailId } , process.env.SECRET_KEY , { expiresIn : 1800 }) ;
    return ans ;
} 


userSchema.methods.verifyUser = async function( password ){ 

    return await bcrypt.compare( this.password , password ) ;

}


const user = mongoose.model( "user" , userSchema ) ; 

module.exports =  user ;