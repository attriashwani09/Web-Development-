// Promises in JS
// : Promise is an Object that is  used to represent the eventual result of an asyanchrounous Operation.
// Basically , it is used to handle operations that take time , such as fetching data from servers , reading files or timers. 

// Promise have 3 stages : 
// 1) pending  2). Resolve   3). Reject



const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=ae81b0bb33104f6fb2651636251712&q=London&aqi=yes`);

console.log(obj);  // Output =  Promise { <pending> }
//As fetching Operation take some time to execute BUt Here We directly printed it without waiting That's why it shows a pending promise.
// The Obj here is also an promise.

// 1. Either we Can SetTimeOut
const obj2 = fetch(`http://api.weatherapi.com/v1/current.json?key=ae81b0bb33104f6fb2651636251712&q=London&aqi=yes`);

// setTimeout(()=>{
//     console.log(obj2); 
// },2000)  ; 
// NOw it shows a response, But Here we randomly just set a Time of 2sec , Fetching Api can take even more or less time than This , We didnont know how much time itr can take, So to overcome this problem We use Promise . 


// 2. Using Promise 

const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=ae81b0bb33104f6fb2651636251712&q=London&aqi=yes`);

// promise.then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })
// Now it shows the result after the fecthing of the Api is done.
// The Output is gives is an Object
// The Output It Give is of HEarder Part. 


// 3. To get The Body Part data , we have to use .jason on the responce of that callback function. 
// promise.then((responce)=>{
//     // This Response.json is also an Promise . So we can't print it directly. so again we will apply .then()t to it
//     // console.log(responce.json());          // Promise { <pending> }

//     // const pro2=responce.json();
//     responce.json()
//     .then((data)=>{
//         console.log(data); // Now , it gives the actual result that we need.
//     })
// })


// 4). Another Way to write this is : 

// const pro2 = promise.then((response)=>{
//     return response.json();
// }) 

// pro2.then((data)=>{
//     console.log(data);
// })


// Or we know that arrow function can even come in one line 
// const pro2 = promise.then(response=> response.json()) 
// pro2.then(data=>console.log(data))

// or this way
// promise.then(response=> response.json()) 
// .then(data=>console.log(data))


// or we can directly use it with fetch 
fetch(`http://api.weatherapi.com/v1/current.json?key=ae81b0bb33104f6fb2651636251712&q=London&aqi=yes`)
.then(response=> response.json()) 
.then(data=>console.log(data))
.catch(error=>console.log(error));