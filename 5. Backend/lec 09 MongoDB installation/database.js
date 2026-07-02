// const dns = require("dns");

// Force Node to use Google DNS
// dns.setServers(["8.8.8.8", "8.8.4.4"]);


// Important : 
// Either i have to force dns or , i can use MOngoDb link without srv 

// Change @ with %40 in password .

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://attriashwani09_db_user:Ashwani%40123@ac-mnnkupz-shard-00-00.yfdge21.mongodb.net:27017,ac-mnnkupz-shard-00-01.yfdge21.mongodb.net:27017,ac-mnnkupz-shard-00-02.yfdge21.mongodb.net:27017/?ssl=true&replicaSet=atlas-neevc6-shard-0&authSource=admin&appName=Cluster0" ; 
const client = new MongoClient(url);

// Database Name
const dbName = 'User';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('Information');

  // the following code examples can be pasted here... 

  const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
  console.log('Inserted documents =>', insertResult);
  
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());