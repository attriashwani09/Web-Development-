// type  conversions

// 1) string to number

let x="100";
x=Number(x);
console.log( x);
// this would get converted to number

let y ="200xs"
z=Number(y);
console.log(z);
// this could not get converted to number and it will give us a output of Nan(NOt a Number)

//2 ) Boolean to nummber
let x1=true
console.log(Number(x1));
// it will give us a output 1
// similarly false will give 0


//3 null and undefined to Number
let x2=null;
console.log(Number(x2));
// null will give 0

console.log(Boolean(x2));
// boolean will give flase


let x3;
console.log(Number(x3)); // NaN
console.log(Boolean(x3)); // False


// string
let a1=true;
console.log(String(a1));
console.log(typeof String(a1));

let a2="alkndod";
console.log(Boolean(a2)); // if the string is non-emptyy then it would return true

let a3="";
console.log(Boolean(a3)); // empty will return flase

let a4=" ";
console.log(Boolean(a4)); // it has a space inside it so it would return true




