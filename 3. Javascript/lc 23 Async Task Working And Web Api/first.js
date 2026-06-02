// Async Task Working

console.log("Hello Coder ");

function meet(){
    const arr=[100,200,300];
    console.log(arr[0]);
} 

function greet(){
    const a=2+3;
    console.log(a);
    meet();
    console.log(a*a);
} 

greet();

console.log('End');

// Output = 5 100 25 End
