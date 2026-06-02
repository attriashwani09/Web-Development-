// Normal Callback Function 


// 1. Without Callback 
// function fetchdata(){
//     console.log("fetching The data.....")
//     setTimeout(()=>{
//         console.log("data fetched Succesfully");
        
//         // calling another FUnction 
//         greet("Randy")
//     },2000)
// } 

function greet(name){
    console.log(`Hello ${name}`);
}


// function fetchdata1(){
//     console.log("fetching The data.....")
//     setTimeout(()=>{
//         console.log("data fetched Succesfully");
        
//         // calling another FUnction 
//         meet("Randy")
//     },2000)
// } 


function meet(name){
    console.log(`We will see ${name} in Delhi.`)
}

// fetchdata(); 
// fetchdata1();

// Here we have to use 2 different Functions to call diferent function . This is very lengthy and time consuming . To overcome this problem we will use Callback Function. 



// 2. Using Callback FUnction : 
function fetchdata2(Callback){
    console.log("fetching The data.....")
    setTimeout(()=>{
        console.log("data fetched Succesfully");
        
        // calling another FUnction 
        const name="Randy";
        Callback(name)
    },2000)
}  

fetchdata2(greet);
// fetchdata2(meet);


// This is how we use CallBack Functions. 
// Next page is about CallBack Hell.