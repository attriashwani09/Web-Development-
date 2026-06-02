// Callback Functions

// It is the function that you pass as an arguement to another function and later use it inside that function.

// 1). Basic example :

function names(fun){
    console.log("This is name function"); 
    fun();
}  

function greet(){
    console.log("This is call back function.")
} 

names(greet);   // passing greet func as arguement to names . 


// 2). Real life example of callback ffunction :
// suppose we have to fetch data every 4 sec , :

// function fetchData(){
//     console.log("Data is being fetched");
// } 

// setInterval(fetchData,4000) 

// in every 4 sec statement pops on the terminal 



