const mongoose = require("mongoose") ;


async function main() {

    // 1). Connect moongse with Database : Here at the end of Link we addded / Bookstore . Means a new Database named BOOKstore will be created
    await mongoose.connect("mongodb://attriashwani09_db_user:Ashwani%40123@ac-mnnkupz-shard-00-00.yfdge21.mongodb.net:27017,ac-mnnkupz-shard-00-01.yfdge21.mongodb.net:27017,ac-mnnkupz-shard-00-02.yfdge21.mongodb.net:27017/BookStore?ssl=true&replicaSet=atlas-neevc6-shard-0&authSource=admin&appName=Cluster0") ; 

    // 2). We created a user Schema 
    const UserSchema = new mongoose.Schema({
        name : String , 
        age : Number , 
        city : String , 
        gender : String
    }) 


    // 3). Create a model : It means we have created a collection in Bookstore named user . Or we can say it is a Class
    const user = mongoose.model("user" , UserSchema ) ; 


    // 4). Now create a document(object) and saving it in our collection user 

    // Way 1 : 
    const user1 = new user({name : "Ashwani" , age : 22 , city : "Karnal" , gender : "Male"}) ;
    user1.save() ; 


    // Way 2 : 
    await user.create({name : "Arun" , age : 30 , gender : "Male" , city : "Faridabad"}) ;
    

    // Way 3 : For Multiple Enteries 
    await user.insertMany([ {name : "Rahul" , age : "28" , city : "Roorke" , gender : "Male"} , { name : "Sonia" , age : "28" } , {name : "Radha" , age : "29" , gender : "Female"} ]) 




    // 5) . Getting Info From DB 
    const ans = await user.find({}) ;
    console.log( ans ) ; 

    

    // 6). Getting a particular info 
    const result = await user.find({name : "Ashwani"}) ;
    console.log( result ) ;
    
} 


main()
.then( () => console.log("Connected to DB ......... ")) 
.catch( (err) => console.log( err ) ) ;