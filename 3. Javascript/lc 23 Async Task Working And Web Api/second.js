console.log('Hello Coder');

setTimeout(()=>{
    const a=2+4;
    console.log(a);
},5000)  

setInterval(()=>{
    console.log("I am fast.")
},2000)

let b=20;
let arr=[20,30,11];

for(let i of arr)
    console.log(i*b);


// Output = 
// Hello Coder
// 400
// 600
// 220
// I am fast
// I am fast
// 6  (Executed After 5 sec)
// I am fast .....