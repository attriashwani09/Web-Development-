// Ways to write a String : 1) ""  , 2) ''  , 3) ``

let str1="Helo Coders"

let str2="Arunachal Pradesh "

//newewst way
let str3=`My name is Ashwani Sharma` 

// its benifit are , we can use other variables directly

let price=50;
console.log(`Price of fresh Tomatoes is ${price} , get them asap`);

//Write with "" = "Ashwani Sharma"
console.log('"Ashwani Sharma"')

//Write with '' = 'Ashwani Sharma'
console.log("'Ashwani Sharma'")

//For next line =\n
console.log("My name is Ashwani Sharma.\n I am 21 Years Old." )

// Now if i  want to print \n to 
//then i have to use (escape Character = \)
console.log("My name is Ashwani Sharma.\\n I am 21 Years Old." )


// String Properties
// 1). Concatanation :

let nstr1="Hello"
let nstr2=" Coder Army"
let nstr3=nstr1+nstr2;

console.log(nstr3); // concatenated String

// 2) . Length
console.log(nstr3.length); // finding length


// 3) Accessing Character : [] or charAt()
let Stname='Rohit'
console.log(Stname[0]);
console.log(Stname.charAt(4))

// 4). Changing Case : i) toUpperCase()  ii)toLowerCase
console.log(Stname.toUpperCase());
console.log(Stname.toLowerCase());

// 5). Searching In the String
// i) indexof(Substring) =  returns the first occurance of Substring ,-1 if not found
// ii) lastIndexof(Substring) =  returns the last occurance of Substring ,-1 if not found
// iii) includes(Substring )= returns true or false 

let eg="Hello Guys , How are you . Parrots are green in colour."
console.log(eg.indexOf('parrot')); //-1
console.log(eg.lastIndexOf('are')); // 35
console.log(eg.includes('Ashwani'));
console.log(eg.includes('colour'));

// 6) Extracting Substring :
// i) slice(start, end)
// ii) substring(start, end) : similar to slice , but does not iinclude -ve values
// iii) substr(start , length)

// let eg="Hello Guys , How are you . Parrots are green in colour."

console.log(eg.slice(10 , 20));
console.log(eg.slice(-5 , -1)); // -ve values

console.log(eg.substring(15,26));
console.log(eg.substr(10, 15));


// 7) Replacing Content 
// i) replace(old substring , new substring)
// ii) replaceAll(old substring , new substring)


console.log(eg.replace("are" , "Chal Hatt"))
// console.log(eg)
console.log(eg.replaceAll("are" , "Badmas"))


// 8 ) split(delimiter) : splits a string into an array based on delimiter

let eg2=" Honey! Money! Ram! Rahul! Ajay! "
console.log(eg2.split("! "));

// 9) Trimming : 
// i) Trim() : removes white-spaces from both ends
// ii) TrimStart() , TrimEnd() : Removes white spaces from start/end

let eg3="  HELLO , Guys  "
console.log(eg3)
console.log(eg3.trim());
console.log(eg3.trimStart());
console.log(eg3.trimEnd());


