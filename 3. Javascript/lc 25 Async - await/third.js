// async await in functions
function test1(){
    const p1=new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise 1 Resolved");
        },2000);
    });

    return p1;
}  

function test2() {
    const p2=new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise 2 Resolved");
       },2000);
    });

    return p2;
} 

async function greet() {
    const data1=await test1();
    console.log(data1); 

    const data2=await test2();
    console.log(data2);
} 

greet();

// Output :
// Promise 1 Resolved
// Promise 2 Resolved 

// After greet is called , test1 is called , so we wait for sec ,   then p1 will get resolved . After then test2 is called , so we wait for another 2 sec , and then p2 is resolved. 

// So in total we have to wait seperately for 2sec each for both the promises because it is inside the function. and due to await firstly test1 is called and the rest of code in greet have to wait for another 2 sec until p1 gets resolved and returned the value.