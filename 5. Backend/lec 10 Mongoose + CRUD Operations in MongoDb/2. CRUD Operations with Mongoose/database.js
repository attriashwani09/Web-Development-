const mongoose = require("mongoose") ;

async function main() {

    mongoose.connect("mongodb://attriashwani09_db_user:Ashwani%40123@ac-mnnkupz-shard-00-00.yfdge21.mongodb.net:27017,ac-mnnkupz-shard-00-01.yfdge21.mongodb.net:27017,ac-mnnkupz-shard-00-02.yfdge21.mongodb.net:27017/BookStore?ssl=true&replicaSet=atlas-neevc6-shard-0&authSource=admin&appName=Cluster0") ;


    
}


module.exports = { main } ;
