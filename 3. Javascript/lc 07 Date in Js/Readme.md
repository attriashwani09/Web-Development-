🧠 What is the Date Object?

In JavaScript, the Date object is used to work with dates and times — it can store, get, and set both date and time information.

📘 Example:

let today = new Date();
console.log(today);  
// Example Output: Wed Nov 12 2025 09:45:00 GMT+0530 (India Standard Time)

🏗️ Creating Date Objects

You can create a Date object in different ways:

Syntax	Description	Example
new Date()	Current date & time	new Date()
new Date("2025-11-12")	Specific date	new Date("2025-11-12")
new Date(2025, 10, 12)	Year, month (0–11), day	new Date(2025, 10, 12) → Nov 12, 2025
new Date(2025, 10, 12, 10, 30, 0)	With time	new Date(2025, 10, 12, 10, 30, 0)
new Date(milliseconds)	From milliseconds since Jan 1, 1970	new Date(1000000000000)
📅 Getting Date Components
Method	Description	Example
getFullYear()	Year	date.getFullYear() → 2025
getMonth()	Month (0–11)	date.getMonth() → 10 (November)
getDate()	Day of month (1–31)	date.getDate()
getDay()	Day of week (0–6, Sunday=0)	date.getDay()
getHours()	Hours (0–23)	date.getHours()
getMinutes()	Minutes	date.getMinutes()
getSeconds()	Seconds	date.getSeconds()
getMilliseconds()	Milliseconds	date.getMilliseconds()
getTime()	Milliseconds since Jan 1, 1970	date.getTime()

📘 Example:

let now = new Date();
console.log(now.getFullYear());  // 2025
console.log(now.getMonth());     // 10
console.log(now.getDate());      // 12
console.log(now.getDay());       // 3 (Wednesday)

⏱️ Setting Date Components
Method	Description
setFullYear(year)	
setMonth(month)	
setDate(day)	
setHours(hours)	
setMinutes(minutes)	
setSeconds(seconds)	
setMilliseconds(ms)	

📘 Example:

let d = new Date();
d.setFullYear(2030);
d.setMonth(5);
d.setDate(15);
console.log(d); // Sat Jun 15 2030 ...

🔄 Formatting Dates
Method	Description	Example
toDateString()	Human-readable date	Wed Nov 12 2025
toTimeString()	Human-readable time	09:50:00 GMT+0530
toLocaleDateString()	Local format	11/12/2025
toLocaleTimeString()	Local time format	9:50:00 AM
toISOString()	ISO standard format	2025-11-12T04:20:00.000Z

📘 Example:

let date = new Date();
console.log(date.toLocaleDateString());  // 11/12/2025
console.log(date.toLocaleTimeString());  // 9:50:00 AM

🧮 Date Calculations

You can use timestamps (milliseconds) to calculate differences:

let start = new Date("2025-11-01");
let end = new Date("2025-11-12");
let diff = end - start; // in milliseconds
let days = diff / (1000 * 60 * 60 * 24);
console.log(days); // 11

💡 Quick Summary

Date() gives current date/time

Months start from 0 (January = 0, December = 11)

You can get or set individual components

Supports multiple date formats & conversions