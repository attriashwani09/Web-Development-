// Map : Map is a built in feature that stores values like object. 
// it has more features than object . 
// it maintains the order in which elements are added
// keys can be of any data type - number , string , object , array , even functions.

// 1) Create And set (Add) Values:
const map1=new Map();
map1.set(1,"Rajesh");
map1.set("Ram","Single");
map1.set(true , 5);

console.log(map1);   //Map(4) { 1 => 'Rajesh', 'Ram' => 'Single', true => 5, 'rajesh' => 2 }
 

// 2) Update Values :
map1.set(1,"Sumit") // Upadte value of 1 from rajesh to sumit
console.log(map1);  // Map(3) { 1 => 'Sumit', 'Ram' => 'Single', true => 5 } 

// 3). Delete Values :
map1.delete(1);
console.log(map1);  // Map(2) { 'Ram' => 'Single', true => 5 }


// 4). Has : Checks if any key is present or not
console.log(map1.has("Ram"));  // true


// 5). Size :
console.log(map1.size);  // 2

// 6). Clear() : Clears All the Map

map1.clear();
console.log(map1);   // Map(0) {}
 

// 7). Map creation 2nd method :
const map2=new Map([[1,"Ram"] , [true,"Hello"] , ["India","Delhi"]]);

// 8). Iteration : Use For-of Loop
for(let key of map2){
    console.log(key );
}

// through Destructuring
for(let [key,value] of map2){
    console.log(key , value);
}


