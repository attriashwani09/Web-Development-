
const p1=new Promise( (resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 Resolved");
    },4000);
});

const p2=new Promise( (resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 2 Resolved");
    },2000);
});

// Using previous method (.then) :
//p1.then( (response)=>console.log(response));


p1.then(response=>console.log(response));
p2.then(response=>console.log(response));

// Output :
// Promise 2 Resolved
// Promise 1 Resolved

// Here promise 2 resolved first and printed first because it executed in 2sec whereas, p1 executed in 4sec.


// using async - await method
async function greet() {
    const data1=await p1;
    console.log(data1);

    const data2= await p2;
    console.log(data2);
}  


//Output : 
// Promise 1 Resolved
// Promise 2 Resolved

// Here even though P2 is already resolved but it would execute after p1 has resolved . This happens due to the await in the code .

// greet();


