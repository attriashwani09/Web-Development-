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

    try{
    console.log("Inside  async Function ...");
    const data1=await test1();
    console.log(data1); 

    const data2=await test2();
    console.log(data2); 
    }
    catch(error){
        console.log(error);
    }
} 

greet();
console.log("Outside async Function Statement 1");
console.log("Outside async Function Statement 2"); 


// Output : 
// Inside  async Function ...
// Outside async Function Statement 1
// Outside async Function Statement 2
// Promise 1 Resolved
// Promise 2 Resolved 

// This happens becuse when we call greet , 1st console log got directly executed , then it calls the function test1, White it was waiting for 2 sec , it comes outside the function and prints Outside statement 1 and 2. then afetr 2 sec it returns back to the grret and then prints Promise 1 resolved. Then it calls test2 and waits for 2 more seconds and then prints Promise 2 resolved.  
