// document.getElementById('first').innerHTML="Honey Singh "

// 1). Accessing Elements by Id / Class Names :
const obj=document.getElementById("first");
console.log(obj); 

obj.className="Mohan"   // class name changes to mohan


// 2). Accessing Elements by Css Selectors :

// single element
const id= document.querySelector('#first');
// id.innerHTML="Rajesh";  

// multiple elements 
// const id2= document.querySelectorAll('.Header1');  
// console.log(id2);   // Will give a HTML list

// changing colors
const id3= document.querySelector('.Header2');  
id3.style.backgroundColor="pink";   


// accessing list elements
// const obj5=document.querySelectorAll('li');
// obj5 ( on connsole )


// iterating over each elements that have multiple elements inside it. 

// for(let i=0;i<id2.length ;i++){
//     id2[i];
// }

// for of loop

// 3).  // contering  NodeList into an Array

// Array.from(id2); 


// we can access child elements too 
// 4). Accessing through Parent Child Css Way :

// const obj6=document.querySelectorAll('ul li');
// obj6       // we will get an Html collection List


// 5). Accessing Elements by Tag Name :
const obj7=document.getElementsByName('h1')
console.log(obj7); 


// 6). Accessing Using Relationships :

//Accessing Parent : 
const list=document.querySelector('li');
console.log(list.parentElement);
console.log(list.parentNode);


// Accessing Child Nodes :
const par=document.querySelector('ul');
console.log(par);
console.log(par.childNodes);  // it consideres empty spaces as text nodes
console.log(par.children);    // it will only give child elements 

//Accessing first and last child elemnets/Nodes

console.log(par.firstChild); // text (Due to blank space )
console.log(par.firstElementChild);  // li< .... > 
console.log(par.lastChild); // text  

// Accessing Siblinh=g Nodes :
console.log(par.nextSibling);    //  #text
console.log(par.nextElementSibling);   // <script > .... 
console.log(par.previousElementSibling);   // <h2 id="second" class="Header1">Topics Covered So far .</h2>
 



// 7). innerHTML / innertext / innerContent 

//<h1 id="first" class="Header1"> Hello <strong>World</strong> !</h1>
//We added Strong keyword inside it . and displayed it none (World Becomes invisible on website) 

console.log(document.getElementById('first').innerHTML);   // Hello <strong>World</strong> !

console.log(document.getElementById('first').innerText);  // Hello !

console.log(document.getElementById('first').textContent);  // Hello World !







