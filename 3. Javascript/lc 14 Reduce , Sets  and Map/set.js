// set : it is an built in object that stores unique values only.

// 1). creation :
const set1=new Set([10,20,30,40,10,12,40,30]);
console.log(set1);   //Set(5) { 10, 20, 30, 40, 12 } 

// 2nd method 
const set2=new Set(); 
// 2). Add property :
set2.add(10);
set2.add(20); 
set2.add(20);
console.log(set2);    // Set(2) { 10, 20 }

// 3). delete property :
 set2.delete(20); 
 console.log(set2);    // Set(1) { 10 } 


 // 4).  has : checks if the value is presesnt or not 

 const id=new Set(["Abhishek","arun","chahat","roshni"]); 

 const res2=id.has("arun");
 console.log(res2);   // true 

// 5). convert  arr->set  and then   set->array 

const arr3=[10,20,30,50,10,60,20,30,44];
// arr->set
const arr3set=new Set(arr3);
console.log(arr3set);     //Set(6) { 10, 20, 30, 50, 60, 44 }

// set->arr  (Use Spread Operator)
const newarr=[...arr3set];
console.log(newarr);    // [ 10, 20, 30, 50, 60, 44 ]


// 6). Set Union  : spread both sets and create another set
// const set3=new Set([...set1],[...set2]) 

const Uset1=new Set([10,20,30,40,20,10,60,15]);
const Uset2=new Set([10,5,8,9,20,40,12]);

const Union=new Set([...Uset1],[...Uset2]);
console.log(Union);   // Set(6) { 10, 20, 30, 40, 60, 15 }

// 7). Intersection Of sets : (find comman elements in both sets)
// use filter method for it 

const res3= [...Uset1].filter((num)=>Uset2.has(num));
console.log(res3);     // [ 10, 20, 40 ] 


// 8). Iterate Over Set :
// const Uset2=new Set([10,5,8,9,20,40,12]); 
// use for of

for(let value of Uset2){
    console.log(value);
} 

// we can also use for each loop.
Uset2.forEach((num)=>console.log(num)); 




