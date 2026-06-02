// Filter : It helps in filtering of the data. 

// it is a method that is used to store the data that qualify a given test. 
// it also axpects a callback funtion. 


// 1). 
const arr=[10,20,27,35,50] 

// const result=arr.filter( (num)=>{
//     return num%2==0;
// })  


// shorify it 
const result=arr.filter( num=> num%2==0 )  

console.log(result);  // [ 10, 20, 50 ]  


// 2). Example 

const info=[
    { name:"Arun" , age : 22 , marks : 90 } ,
    { name:"Sanchit", age : 26 , marks : 40 } ,
    { name:"Payal" , age : 21 , marks : 80 } ,
    { name:"Arvind" , age : 24 , marks : 60 } ,
    { name:"Manav" , age : 22 , marks : 30 } ,
] 

const data=info.filter((obj)=>{

    return obj.marks>50;
}) 

console.log(data);  



