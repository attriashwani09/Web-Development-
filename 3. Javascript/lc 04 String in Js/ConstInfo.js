//primitive const 

const a=10;
// a+=20;
console.log(a); 
// this have given the errror because  the const element's value could not get changed


//Non-Primitive
const info={
    Name :'Ashwani',
    age :21
} 

info.age=22;
console.log(info); 
// here the value gets changed even if we had used const because in Stack the address remains same . The cahnge occur in Heap 

let info2={
    Name:'Arun',
    Age : 44
} 

info=info2;
console.log(info);

//Here we got error , because the address also got changed in the Stack Memory

