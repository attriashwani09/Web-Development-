// Array in Js

let arr=[1,2,3,45,6,"rohit",true]

//1). Accessing the elements
console.log(arr[0]);
// console.log(arr[-1]);  // this method does not take -ve values
console.log(arr.at(-1)); // this takes -ve indexes too.

//2) length: finding array length
console.log(arr.length); //7


//3) Structured Clone :
// earlier when we direclty copies the another array , the copied array gets the refference of the original array
// to overcome this problem , we use structured clone

let newarr=structuredClone(arr);
console.log(newarr);
console.log(newarr==arr); // it gives false , thus both the addresses of arrays are different

// 4). Push() : push an elemenet at the last of the array
arr.push(50);
arr.push(70);
console.log(arr); 

// 5). pop() : Pop the last element from the array
arr.pop();
arr.pop();
console.log(arr);


// 6) unshift() : Adds an element at the start of the array
arr.unshift("hello");
arr.unshift(91);
console.log(arr);

// 7). shift() : removes the element from the start of the array
arr.shift();
arr.shift();
console.log(arr);

// 8). delete() : delete the element from any index of the array but it lefts an emepty space on that deleted index
// delete arr[2];
// console.log(arr);
// [ 1, 2, <1 empty item>, 45, 6, 'rohit', true ]

// 9). indexOf() : finds indexes of elements
let arr2=[ 1, 2, 3, 45, 6, 'rohit', true ,45]
console.log(arr2.indexOf(45)); // 3
console.log(arr2.lastIndexOf(45)); //7
console.log(arr2.indexOf(100));  // -1

//10). includes() : returns true or false
console.log(arr2.includes("arjun"));  // false
console.log(arr2.includes("rohit"));  // true

// 11). slice(start_index,ending_index) : extracts a copy of the portion from the array.
// the original array does not get affected
console.log(arr2.slice(2,6)); 
console.log(arr2);

// 12). splice(starting_index , length ): removes the element from start index to the length given.
// used to either remove a portion from the original array or to add element in b/w indexes.

// arr2=[ 1, 2, 3, 45, 6, 'rohit', true, 45 ]

// console.log(arr2.splice(2,5));  // [ 3, 45, 6, 'rohit', true ]
// console.log(arr2);  //[ 1, 2, 45 ] 

// to add element in between indexes after deletion 
// splice(start , length , add values , values , ...)
// here values means the elements to add (addition starts from the start index).

// console.log(arr2.splice(2,3 , "arun ", false , "Happy"));   // deleted [ 3, 45, 6 ] and added [arun , false , happy]
// console.log(arr2);  


//if we don't want to delete any element , (Just add elements at a particular indexes)
// splice(start, 0 , add values)  
arr2.splice(2,0 , "arun ", false , "Happy");
console.log(arr2);



// 13). toString() : 
console.log(arr2.toString()); // 1,2,arun ,false,Happy,3,45,6,rohit,true,45

// 14). Join() : also coverts to string but we can operate on comma's and add other symbols/spaces instead fo comma's
console.log(arr2.join("*")); // 1*2*arun *false*Happy*3*45*6*rohit*true*45
console.log(arr2.join(" ")); // 1 2 arun  false Happy 3 45 6 rohit true 45


// 15). concat : Adds 2 or more arrays and converts them to one big array 

let arr3= [1,2 ,3];
let arr4=[4,5,6];

let arr5= arr3.concat(arr4);
console.log(arr5);  // [ 1, 2, 3, 4, 5, 6 ]

//16). flat() : flatens the array . we can set the level by 1 , 2 or if we don't now then infinity

let arr6=[[1,2,3],[4 , 5 , 6 ] , 7 , [8 , [ 9 , 10 , 11]]];
console.log(arr6.flat(Infinity)) ;  // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11 ]




// 16 ). creating 2d array
let temp1=[1,2,3];
let temp2=[4,5,6];
let temp3=[7,8,9];

let temp=[];
temp.push(temp1,temp2,temp3);

console.log(temp); 

// 17 Array.isArray() : to check if any element is array or not
let abc=["helo",true,12,"fail"]

console.log(Array.isArray(abc)); //true


// 18 ). Dynamic array creation (2nd menthod to crate array)
let abc2=new Array(10); // if we give 1 value inside it, then it will think of it as its total length 
console.log(abc2);  // [ <10 empty items> ]
console.log(abc2.length);  // 10

// if we give more than 1 value , then it would be considered as array elements
let abc3= new Array(10,20,30,40,50);
console.log(abc3);   // [ 10, 20, 30, 40, 50 ]
console.log(abc3.length);  // 5

