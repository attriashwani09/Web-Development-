// Advance Loops

// 1). For in Loop : used to loop through object keys(Properties)

const obj={
    name:"Arun",
    age:22,
    gender:"male",
    address:"karnal"
} 

// for( let keys in obj){
//     console.log(keys , obj[keys]);
// } 

// it checks keys and its values and prints them 



// # why to use for in loop inseated of using Object.keys()

const obj2=Object.create(obj);

obj2.account_num = 12345 ;
obj2.occuptaion = "Engineer"

console.log(Object.entries(obj2))   // [ [ 'account_num', 12345 ], [ 'occuptaion', 'Engineer' ] ] 

// Here we created an obj2 prototyping obj1 (Means obj2 has all the properties of obj ) , but we only see obj2 properties . If we want to access  the properties like  name , age ... etc . then we have to acces them seperately . like ,

console.log(obj2.name);   // Arun 


// but if we use for in loop it print everything in one go , including the prototype values . Beacuse it checks all the keys that are enumarable and prints them. 

for( let keys in obj2){                          
    console.log(keys , obj2[keys]);
}  

//  account_num 12345
// occuptaion Engineer
// name Arun
// age 22
// gender male
// address karnal   

// so this was its advantage over normal Object.entries() or object.keys()



// we can not use for in loop for arrays 

const arr=[10,20,30,40,50] 

arr.name="Ashwani"
arr.age=22;

for(let index in arr){
    console.log(index , arr[index]);
} 

// 0 10
// 1 20
// 2 30
// 3 40
// 4 50
// name Ashwani
// age 22 

// alongside with indexes it also take name and age ( name and age can't be indexes ). this happened becuse for-in  loops checks key:value pairs and although name and age exits there as keys and values but they are not the actual data that is stored in array . The actual data is in index 0 , 1, 2 ... not in name and age . 

//# to overcome this problem we can either use normal for loop or for-of loop

for (let i=0;i<arr.length ;i++){
    console.log(i , arr[i]);
} 

// 0 10
// 1 20
// 2 30
// 3 40
// 4 50  

// 2). for of loop : used to loop through iterables , array , maps etc. 

const arr2=[5,10,15,20];
for(let index of arr2){
    console.log(index);
} 

// 5
// 10
// 15
// 20 



// 3) . For each Loop : It takes a callback function as an arguement to do execution.

console.log("For each Loop :")
const arr4=[10,20,30,40,50];

// arr4.forEach(function(num){
//     console.log(num);
// })  

// using arrow function 

// arr4.forEach((num)=> console.log(num)); 


 
// here we can also give multiple arguements
// single arguement = number 
// 2nd arguement = index
// 3rd arguement = array  

arr4.forEach((num , index,arr)=> {
    arr4[index]=num*2;
});  

console.log(arr4);



