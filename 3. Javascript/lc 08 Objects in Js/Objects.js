// objects in Js

//1). Creating the object :

const obj={
    name:"Ashwani Sharma",
    //"name":"Ashwani Sharma", // key is stored as String
    age:21,
    Income:"None"
} 

console.log(obj);

// 2). Accessing the elements 
console.log(obj.name);
console.log(obj["age"]);
console.log(obj["Income"]);

//3). How array is implemented by object ;
// here the keys indexes(keys) are also stored as string
const obj1={
    0:10,
    1:20,
    2:30,
    3:40
} 

console.log(obj1[0])
console.log(obj1["1"]) 




// # @2nd Method to create Object
// const person1=new Object();
// person1.Name="Rahul"
// console.log(person1.Name);





const person={
    name:"Arun",
    Age:20,
    Gender:"Male"
} 
//4). Adding Property
person.height="5.11ft";
person.Salary="$1000";

console.log(person); 

// 5). Modifying the Object
person.Age=22;
console.log(person);

// 6). Delete Any Key :
delete person.Age;
console.log(person); 

// # @3rd Way to create an Object

class people{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
} 

const per1=new people("Rahul",20,"Male");
const per2=new people("Shruti",19,"Female")
console.log(per1 , per2); 


// Comman Objects Methods

// 1). Keys : it will provide an array conataining all the keys of the object.

const newobj={
    Name:"Priya",
    Age:20,
    Gender:"Female"
} 

console.log("Keys List :")
let arr= Object.keys(newobj); 
console.log(arr);

// 2). Values :
console.log("Values List :")
let arr2 = Object.values(newobj);
console.log(arr2); 

//3) Entries :  gives a 2d list of all the entries
console.log("Entries List :")
let arr3=Object.entries(newobj);
console.log(arr3);

// 4). Assign() : Combines 2 or more objects 
// syntax= Object.assign(target , sources) 
// operates on the target object , so to avoid mishandling of data we use {} (empty object) 

const abc1={a:10 , b:20};
const abc2={c:30, d:40};

const abc3=Object.assign({},abc1,abc2);
console.log(abc3);  //  { a: 10, b: 20, c: 30, d: 40 }


// 5). Spread Operator (...) : Inpace of assign we can use spread operator

const abc4={...abc1,...abc2}
console.log(abc4);  //  { a: 10, b: 20, c: 30, d: 40 }


// 6). Object.freeze() : Prevents any modifications to the object.
const temp={
    name:"Arun",
    age:25
} 

Object.freeze(temp);
temp.name="Rajesh"
console.log(temp);  // { name: 'Arun', age: 25 }  name did'nt change


// 6). Object.seal() : Prevents adding or removing properties but allows modification of existing properties

const temp2={
    name:"Arun",
    age:25
}
Object.seal(temp2);
delete temp2.age;  // deletion/addition can not be done
temp2.name="Ronaldo"  // name changes
console.log(temp2);   // { name: 'Ronaldo', age: 25 } 


// 7) . Prototyping an object : Object.create()

const originalObj={
    name:"Ashwani",
    age:25,
    city: "Karnal"
} 

const objn=Object.create(originalObj);
objn.Salary=10000;
objn.Occupation="Engineer";

for( let keys in objn){
    console.log(keys,objn[keys]);
} 

// it inherited the properties of originalobj
// Salary 10000
// Occupation Engineer
// name Ashwani
// age 25
// city Karnal