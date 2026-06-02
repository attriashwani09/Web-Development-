// Conditional Scope 

// 1). If-else statement :

let age=30;

if(age>=18){
    console.log("Candidate can vote")
} 
else{
    console.log("Candidate can't vote.")
} 


// 2). if else-if else statement
let age2=45;
if(age2<18){
    console.log("You are minor")
} 
else if(age2>=18 && age2<60){
    console.log("you are an adult");
} 
else{
    console.log("you are old person")
} 



// 3). Multiple Conditions : Switch Statement  

switch(new Date().getDay()){
    case 0: console.log("Sunday")
    break; 

    case 1: console.log("Monday")
    break;

    case 2: console.log("Tueday")
    break;

    case 3: console.log("Wednesday")
    break;

    case 4: console.log("Thrusday")
    break;

    case 5: console.log("Friday")
    break;

    case 6: console.log("Satday")
    break; 

    default:
        console.log("Not a valid day")
} 





