// Property Descriptors 
 
const obj={}

obj.name="Arun";  

// property descriptor : writeable / enumerable / configurable 
console.log(Object.getOwnPropertyDescriptor(obj,'name')); 

// output ;
//{ value: 'Arun', writable: true, enumerable: true, configurable: true }



// 1). Writeable = it controls weather a property can be changed (updated). 

Object.defineProperty(obj , 'name' , {
    writable : true ,
    enumerable : true , 
    configurable : true
}) 

obj.name="Manpreet" 

console.log(obj.name); // here name got changed from arun to manpreet (because writeable = true) 

Object.defineProperty(obj , 'name' , {
    writable:false
}) 
obj.name="ram";
console.log(obj.name); // Manpreet (Name don't changed because writeable was false)  


// 2). enumerable : controls waether a property shows in loops ( like for-in or Object.keys() )  or not.

const obj1={
    name:"Raj",
    age:22 ,
    gender : "male"
} 

Object.defineProperty(obj1,'name',{
    enumerable:false
}) 

for(let key in obj1){                           // output 
    console.log(key , obj1[key]);               // age 22 , gender male     (Here name didn't print because enurable was false)
} 


// 3). Configurable : controls weather property ( writeable , enumerable)  can be deleted or modified. 

const obj2={
    name:"Raj"
} 

Object.defineProperty(obj2,'name',{
    writable:false,
    configurable:false  // false (Now any property of this object can't get changed ). 
}) 

// Object.defineProperty(obj2,'name',{
//     writable:true,                      // here error comes
// }) 
// obj2.name="Madhur"
// console.log(obj2.name);  




