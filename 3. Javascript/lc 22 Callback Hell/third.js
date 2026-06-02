//# Js is a single Threaded , Synchronous language but it also shows Asynchrounous Behaviour
//* Single Threaded means , it performs one Opeartion at a Time. (Only can listen to 1 event at a time.)
//* Synchrounous means exection is done in order . First 1st line executed then second and so on . 



//1. Asynchronous Behaviour : 
// console.log("10");

// setTimeout(()=>{
//     console.log('20');
// },2000);

// console.log("30");

//Output = 10 30 20 
// This Happens Because SetTimeout is Not a part of Js Engine . 
// Other Elements like document , EventListners are also not a part of Js Engine . Browser handles and executes these Features.



// 2. Sync Behaviour :
console.log("10");

const timer=Date.now();

while(Date.now()-timer<2000){
    // Wait for 2 seconds 
} 

console.log("20");

console.log("30");

// Output = 10 20 30 

// The outpur is Synchrounous because While is Part of Js Engine. 


