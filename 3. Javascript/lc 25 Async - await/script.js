// 1).   Async - await : Async function always returns a prommise 
// Synbtax :
// async function name(params) {
// } 

// 2).   await : await pauses the execution of its surrounding async funtion until the promise is setteled.
// await is always used inside an asyanc function

// These are used inplace of   Callback Hell   and or   (.then , .catch)


// 3).  IIFE : Immediately Invoked function Expression.
// IIFE : it is a function that is called immediately as soon as it is defined.


// 4). We can also catch the errors in async await . This is shown in Fourth.js file.

// 1) . Example 1 
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather Data Returned");
            resolve(200);
        },2000)
    });
} 

// Consuming the function
async function getWeatherData() {
    await api();
    await api();
} 

// getWeatherData();



// 2). Example 2
function Data(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data ",dataId);
            resolve(200);
        },2000);
    });
} 

async function GetAllData() {
    console.log("Getting Data 1 .....");
    await Data(1);
    console.log("Getting Data 2 .....");
    await Data(2);
    console.log("Getting Data 3 .....");
    await Data(3);
    console.log("Getting Data 4 .....");
    await Data(4);
    console.log("Getting Data 5 .....");
    await Data(5);
} 

// GetAllData();



// # IIFE
// 3. Here We are Calling The GetAllData() function seperately . If we Want to immediately exectute it Without Calling , Then We can use :   IIFE   

// Syntax :

// 1st Way : Normal Function Decelaration
// ( function (){
//     ......
// })(); 

// 2nd Way : Async Function
// ( async (){
// ..........
// }) (); 

// 3rd Way : Using Arrow function 
// ( ()=>{
// .....
// }) ();


// 4). IIFE example :
( async function () {
    console.log("Getting Data 1 .....");
    await Data(1);
    console.log("Getting Data 2 .....");
    await Data(2);
    console.log("Getting Data 3 .....");
    await Data(3);
    console.log("Getting Data 4 .....");
    await Data(4);
    console.log("Getting Data 5 .....");
    await Data(5);
} ) ();
