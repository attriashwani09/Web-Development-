// Date in js


// 1). Accessing Date
let d=new Date();
console.log(d);   // 2025-11-12T08:44:28.655Z
console.log(d.toDateString());
console.log(d.toString());   // Wed Nov 12 2025 14:14:28 GMT+0530 (India Standard Time)
console.log(d.toISOString());

// Type of Date is Object
// time is calculated from 1/1/1970
// It is calculated in miliseconds.
let d1=new Date(1000);  // 1sec = 1000ms
console.log(d1);   


// only get day/date/months , etc
console.log(d.getDate());
console.log(d.getDay()); // wed =3
//it follows 0 based-indexing
// sun / mon / tue /wed
// 0   / 1   / 2   / 3 

console.log(d.getMonth());  // 10
// same 0 indexing for month  // nov =10 

console.log(d.getMilliseconds());


// 2) . Another way to get return Date
const now = Date.now();
console.log(now);   // gives time in milisecond

// 3). Another format to write custom Date
const d2=new Date("2025-11-12");
console.log(d2);
console.log(d2.toDateString());   // Wed Nov 12 2025


// we can give a total of a 7 values :
// Year / Month / Date / Hour / Min / Sec / Miliseconds
const d3=new Date(2025,10,12);
console.log(d3.toDateString());
// Numbers - follows 0 based-indexing
// String - follows normal indexing 



// 4) . Setting Date Component 
const d4=new Date();
d4.setDate(20);
d4.setMonth(10);
d4.setFullYear(2021);
console.log(d4.toString());


// 5). Date Calculations

const date1=new Date();
const date2=new Date("2024-11-12"); 
console.log(date1-date2);
// Outcome will always come in Miliseconds

