// new year timer

const today=new Date();
const newYear=new Date("2026-1-1") 

const remaining_time=newYear-today; 
let Days= Math.floor(remaining_time/(1000*60*60*24));
let hours=Math.floor(remaining_time/(1000*60*60)%24);
let minutes=Math.floor(remaining_time/(1000*60)%60);
let seconds=Math.floor(remaining_time/(1000)%60) ;
// console.log(Days); 
// console.log(hours);   
// console.log(minutes);  

// Time remaining for 2026
console.log(`Days=${Days} , Hours = ${hours} , Minutes = ${minutes} , Seconds = ${seconds}`)

