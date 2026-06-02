// Non Primitive Data TYpes
// 3 types : 1) Array  2)Object  3)Function

// 1) Array :
// In js Array can store any primitive data type inside it
// we have use [] brackets
let arr=[1,4,null,"Mohan", 155538494792838380048n, true ,Symbol("arun")]
console.log(arr); 
console.log(typeof arr);
// Type of array is Object because in js array is implemented with the help of Object.



//2) Object: Object stores data in key value pair
// to use it we have use curly brackets {}
let obj={
    user_name:"Arun",
    acc_number:793933321,
    balance : 420
} 

console.log(obj);
console.log(typeof obj);



// 3) Function : it is a block of code that is designed to perform a particular task.

function details(){
    student_name="Ajay Kumar",
    age= 20;
    father_age=50;
    console.log(father_age);
}

details();

// we can also assign a function with a variable name
let fun=function(){
    console.log("Mohit")
} 

fun();


