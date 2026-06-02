// element Manipulation Using Js

// 1).  Create an Element (Node):

// const element=document.createElement("li");
// element.innerHTML="React JS" 

// // Accessing Parent to link cretaed node with it.
// const parent=document.getElementById("root");
// parent.appendChild(element);     

// append adds the node at the end of the parent



// If we want to add multiple elements , then we can create a function offr it. 

// function push(content){
// const element=document.createElement("li");
// element.innerHTML=content;

// // const element2=document.createElement("li");
// // element2.innerHTML=content+"  V2.0";


// const parent=document.getElementById("root");
// parent.appendChild(element);

// // parent.append(element,element2);
// // with append we can add multiple elemenets at same time.
// } 

// push("Node");
// push("TS");
// push("MongoDB");


// 3). Adding A text node
// const element=document.createTextNode("Arjun Rajput");

// const parent=document.getElementById('root');
// parent.append(element); 


// 4). Creating Attribute Node :
// const element=document.createAttribute('id');
// element.value="first";

// const cur_list=document.querySelector('li');  // selects the first possible attribute (li == CN)
// cur_list.setAttributeNode(element);   //CN id becomes first  

// Accessing to 2nd list element (li==HTML)

// const parent=document.getElementById('root');
// parent.children[1].setAttributeNode(element);    // HtMl Id becomes first . 


// 5). Accessing Attributes of a element :
const element=document.getElementById('root');
// console.log(element.getAttribute('id'));   //root 
console.log(element.getAttribute("class"));   //Raman 

// # we can set custom attributes :
element.setAttribute("Name","Muskan");   // new attribute name= muskan formed in ul tag 

// # Updating Attribute :

element.setAttribute("class","Rohit Khatri");  // class name changed 

// # Remove Attribute 
element.removeAttribute('Name');   




// 6). Add Nodes To The Dom 

// i). appendChild( Node1 );  // Adds single element at the last of parent element 

// ii). append(Node1 , Node2 , Node3 , .....)   // Adds multiple element elements at the end of parent element ;


/// iii) prepend()  : Inserts in the starting  ;
const element1=document.createElement('li'); 
element1.innerHTML="Angular"

const parent=document.getElementById('root');
parent.prepend(element1);


// iv). insertBefore(new Node , Reference-Node)

const element2=document.createElement('li'); 
element2.innerHTML="Mongo-DB"

const child2=parent.children[2];  
parent.insertBefore(element2,child2); 


// v) replaceChild(new Node , Old-Node) 

const element3=document.createElement('li'); 
element3.innerHTML="Node Js"

const child3=parent.children[1];
parent.replaceChild(element3,child3);   // CN replaced with Node Js

// vi)  Using innerHTMl =
//const parent=document.getElementById('root'); 

parent.innerHTML+="<li> .Net </li> " 


// vii). Using insertAdjacentHTMl()  or insertAdjacentElement()  :  (we have  4 properties in it.)

// * beforebegin : Before the element itself. 
// * afterbegin : Inside the Element , before it's first child. 
// * beforeend : Inside the element , after it's last child. 
// * afterend : After the element itself 


const element4=document.createElement('div');
element4.innerHTML="I Am Div Tag";

// parent.insertAdjacentElement("beforebegin",element4);
//parent.insertAdjacentElement("beforeend",element4);
// parent.insertAdjacentElement("afterbegin",element4);
// parent.insertAdjacentElement("afterend",element4); 


// viii) removeChild(Node) :
const child4=parent.children[4];  
parent.removeChild(child4);   // Css Removed


// ix).  .remove() : used to remove an element from dom
const remove_element=document.querySelector('li');
//remove_element.remove();  // removed angular 




