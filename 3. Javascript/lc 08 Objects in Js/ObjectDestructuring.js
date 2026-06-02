// Object Destructuring 

// 1). Nested Onject :
const user1 ={
    name:"Ashwani",
    age:21  ,
    address : {
        pincode:132039,
        city:"Karnal",
        state : "Haryana"
    }
} 

console.log(user1.address.pincode); 


// 2). Copying element using Object.assign()
const user2= Object.assign({},user1) ;

user2.address.city="Panipat";
console.log(user1.address.city); 
// we created a copy of the user data but when we change the city name to panipat of user2 then, and checked user1's city address also got changed 
// by this way we come to know that the nested object creates a shllow copy of the orignal object

user2.name="Rajesh"
console.log(user1.name);
// here user1 name did not changed , so this is a deep copy 


// to create a good deep copy of any object , we should use structuredclone()


// 3). Destructuring of Objects : 
// it allows us to extract values from object and store them in a variable using simple and clean syntax

const obj={
    name:"Ashwani",
    age:21,
    gender:"Male" 
} 

// const {name,age,gender}=obj; 
// console.log(name); 
// console.log(gender); 

// # Renaming the variables
const {name : full_name,age : Umar ,gender : gen}=obj; 
console.log(full_name); 
console.log(gen); 


// 4). Destructuring of Array
// ... = this is rest Operator
const arr=[10,20,30,40,50,60,70];
const [first , second ,  , third , ...restarr]=arr;  
console.log(first , second , third) 
console.log(restarr) ; 


// 5) Destructuring of Nested Objects :

const nestobj ={
    name:"Ashwani",
    age:21  ,
    address : {
        pincode:132039,
        city:"Karnal",
        state : "Haryana"
    }
}  

const {name , address:{ pincode , city , state}}=nestobj; 
console.log(state);
 

