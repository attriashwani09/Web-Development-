// Reduce : It is an array method that reduces an array to a single value by running a function on each element. 

// syntax : 
// let arr =[10,20,30,40,50]
//   const res=arr.reduce( callback function ,initiliazor) 
// in call- back we have to give two values  (acc,cur)
// acc=acculumator , cur = current value 

// accumulator (acc) → stores the running result
// currentValue (curr) → current element being processed
// initialValue → starting value of the accumulator (optional but recommended) 


// 1). example : Addition of array
// let arr =[10,20,30,40,50]
// const res=arr.reduce((acc,cur)=>{
//     return acc+cur;
// },0) 
// console.log(res);     //150 

// shoritfy version 
let arr =[10,20,30,40,50]
const res=arr.reduce((acc,cur)=>acc+cur ,0) ;
console.log(res);  



// 2). example 
const arr2=["orange","apple","banana","orange","apple","banana","orange","grapes"] ;

const result=arr2.reduce((acc,cur)=>{
    if(acc.hasOwnProperty(cur))
        acc[cur]++; 
    else 
        acc[cur]=1; 

    return acc;
},{}) 

console.log(result);
 
