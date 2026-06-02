// Prototype Chaining ;

// 1). Prototype : It is a property in js in which one objects inherits the property of other object. 

const obj1={
    name:"Arun",
    age:22
} 

const obj2={
    salary:20000,
    gender:"Male"
} 

obj2.__proto__=obj1;
console.log(obj2.name); 
// obj2 inherits the property of obj1

