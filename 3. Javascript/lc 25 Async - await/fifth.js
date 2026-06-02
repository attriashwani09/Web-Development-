// We can also execute two or more functions parallely :

// Use Promise.all() 
// It will return an array of resolved Promises. 

// Output comes after all the promises are resolved. 

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
       },10000);
    });

    return p2;
} 

async function greet() {

    const [data1,data2]= await Promise.all([test1(),test2()]);
    console.log(data1); 

    console.log(data2); 
    
} 

greet();
