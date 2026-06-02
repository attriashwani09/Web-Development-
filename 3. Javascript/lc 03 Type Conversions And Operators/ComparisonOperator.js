// Comparision Operators

// == , === , > , < , >= , <= , !=

//1).  number to number

// a1=10;
// a2=20;
// a3=10;
// console.log(a1==a2);
// console.log(a1==a3);

// console.log(a1>a2);
// console.log(a1<a2);

// console.log(a1<=a2);
// console.log(a1>=a2);  


// 2) String with number

// let a1=10;
// let a2="20";

// //yha par comparision se pehle type conversion hoga

// console.log(a1==a2); // false
// console.log(a1<a2); // true

// // === this operator will firstly check if the data types are same or not , and after that it will give the result 

// console.log(a1===a2);

// a3=10;
// console.log(a1===a3); 


//3) . Undefined and Null
//*NOte: Null is Only equivalent to undefined 
// console.log(null==undefined);
// console.log(undefined==null); 


// console.log(null==0); // false becuse null can only be equivalent to undefined
// console.log(null<0); // false
// console.log(null>0); // false
// console.log(null<=0); // true ( just because here we did type conversion)
// console.log(null>=0); // true ( same reason as above)


//4). undefined comparision 

// console.log(undefined==0); // false becuse undefined can only be equivalent to null
// console.log(undefined<0); // false
// console.log(undefined>0); // false
// console.log(undefined<=0); // false 
// console.log(undefined>=0); // false 

// console.log(undefined==undefined); // true

// console.log(NaN==NaN);  // false because (Number(Sumit)=undefined)
// console.log(Number("sumit")==Number("Raman"));

// let x=123;
// let y="123";
// let z=123;

// console.log(x==y==z); // THis gives false because x==y becomes true  , and then true == 123(z) is false










