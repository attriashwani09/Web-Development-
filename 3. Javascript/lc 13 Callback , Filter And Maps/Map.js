// Map : it is also an array method . 
// here we can perform on the elements and return a new array.


// 1). Map Example :
const arr=[1,2,3,4,5,6]

const res=arr.map((num)=>num*num);

console.log(res);  



// 2). Chaining of array methods:

const arr1=[1,2,3,4,5,6]

const res1=arr1.filter(num=>num%2==0).map(num=>num*num);

console.log(res1);
