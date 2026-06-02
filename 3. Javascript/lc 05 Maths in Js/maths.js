//  numbers
// 1st way(Stored in Stack)
let num1=50;
//2nd way(Stored in Heap)
let num2=new Number(50);
let num3=new Number(50);

// console.log(num2);
// console.log(typeof num2); 

console.log(num1==num2);   //true 
console.log(num2==num3)    // false (because there adddresses got compared instead of their actual value)


// number Properties
let num=231.68;
console.log(num.toFixed(1)); //rounds off / tells how many values we need after decimal point
console.log(num.toPrecision(3)); // we tells how many digits we need . and it rounds off that number into that many digits

console.log(num.toExponential(4));// it tells us how many digits after decimal. before decimal there is 1 number only

console.log(num.toString());
console.log(num.valueOf()); // returns the actual value of the num



//Maths 

console.log(Math.E);
console.log(Math.PI);
console.log(Math.LOG10E);


//floor and ciel values
let num5=24.8;
console.log( Math.floor(num5));  // 24 // returns closet lesser whole number
console.log(Math.ceil(num5)); // 25 // returns larger closedt whoole number


// Math random function 
//math.random() gives values 0<= val < 1 
//greater than equal to zero and less than one
console.log(Math.random());


// 0-9  (Just multiiply it by 10) and take floor
console.log(Math.floor(Math.random()*10))

// 1-10 (Just add 1)
console.log(Math.floor(Math.random()*10)+1)

// 11 -20 (Just add 11)
console.log(Math.floor(Math.random()*10)+11)



// formula to create random number between any range 
// Math.floor(Math.random()*(max-min+1)+min) 


//1-6
console.log(Math.floor(Math.random()*(6-1+1)+1))

// 41 -50
console.log(Math.floor(Math.random()*(50-41+1)+41))


