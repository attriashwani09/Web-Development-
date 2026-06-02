// Function in Javascript

// 1). Declaration and working :

function print(){
    console.log("HTML");
    console.log("CSS");
    console.log("Javascrpit");
} 

print();
print();
print(); 


// 2). Addition Function : 
            // parameters
function add(num1 , num2){ 
    console.log(num1+num2); 
} 

add(10,15);  // arguements
add(-10, 18); 


//3). Multiplication Function :

function mul(num1 , num2){
    return num1*num2;
} 

let result=mul(10,12);
console.log(`multiplication = ${result}`); 



// 4). Assign variable with a function : 

const fun=function(){
    console.log("Ram");
    console.log("Madhur");
    console.log("Pragg") 
    return 50;
} 

console.log(fun()) 


// 5). Arrow Function :

const multi=(num1,num2)=>{
    return num1*num2;
} 

console.log("Multiplication = ",multi(10,20));


 addition=(num1,num2)=>num1 + num2 ;
console.log("Addition =",addition(10,15))


cube= number => number*number*number;
console.log("cube = ",cube(4)); 



// 6). Rest Parameter :
// when we don't know the total number of parameter  or when we want to add unlimited no. of parameters , then we uses rest operator 

 function sum(...number){
    console.log(number) ; // [ 10, 15, 20 ]
    // it stores numbers(arguments) in the form of array . 
    // uske baad hum loop ka use krke submissiom nikal skte hai. 

 } 

 sum(10,15,20);
//  sum(10,15,20,17,21,49,39);
//  sum(5,2); 


// 7). Passing Object as arguement 
const obj={
    name:"Arun",
    age:21,
    gender:"Male"
} 

function func({name, age}){ 
    console.log(name , age);
} 

func(obj); 


// checking weather it is passed by value or reference :

// function func(obj){ 
//     obj.name="Raj"
//     console.log(obj.name , obj.age);
// } 

// func(obj); 

// console.log(obj.name)  // output = raj

// so it is passed by reference

