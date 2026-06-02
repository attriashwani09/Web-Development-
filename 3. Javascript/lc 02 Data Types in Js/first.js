//declaration a variable
let num=10;
console.log(num);

// data types in js
// 2 types : 1) Primitive Data types   2) Non-Primitive Data Types

//there are total 7 primitive data types
// Number , string , boolean , undefined , null , symbol , Bigint

// number
let number=10;
console.log(number);
console.log(typeof number);

// string 
let str="My name is Arun";
console.log(str);
console.log(typeof str);

// boolean
let ans=true;
console.log(ans);
console.log(typeof ans);

// undefined
let total;
console.log(total);
console.log(typeof total);

//null
let Pass=null;
console.log(Pass);
console.log(typeof Pass);
// Type of null id object

// Bigint

// if we try to directly print this number then we would probably get some wrapped up number
// let num2=12692635418996111256778888;
// console.log(num2);
// console.log(typeof num2); 

// So to overcome this problem we have to use bigint (just palce n after the number)
let num2=12692635418996111256778888n;
console.log(num2);
console.log(typeof num2);


//symbol in js

let x=Symbol('ram');
console.log(x);
console.log(typeof x);
