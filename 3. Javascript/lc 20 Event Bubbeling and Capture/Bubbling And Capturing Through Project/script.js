const gp=document.getElementById('grandParent');
const parent=document.getElementById('parent');
const child=document.getElementById('child');

//  In addEventListner() : there  can be three arguemenets
// addEvenetLinstner( event_type  ,  callback func ,  true/false)  

// By deafult 3rd arguement is false and thus Event Bubbling is followed
// Event Bubbling = Child -> parent -> grandParent 

// If true , then capturing is implemented 
// grandParent -> parent -> child 



// 1). Event Bubbeling : click orange (child div ) :

// gp.addEventListener('click' , (event)=>{
//     // console.log("grandParnet clicked");

//     console.log(event.target);   // To check which element trigered the event 
// } , false) 

// parent.addEventListener('click', (event)=>{
//     // console.log("Parent Clicked");

//     console.log('cur target =', event.currentTarget); // to check the cur target after trigerring of event 

//     console.log(event.target);
// },false) 

// child.addEventListener('click', (event)=>{
//     //  console.log("child clicked")
//     console.log(event.target);   
// },false); 

// child clicked
//Parent Clicked
// grandParnet clicked
 


// 2). Event Capturing :

// gp.addEventListener('click' , ()=>{
//     console.log("grandParnet clicked");
// } , true) 

// parent.addEventListener('click', ()=>{
//     console.log("Parent Clicked");
// },true) 

// child.addEventListener('click', ()=>{
// console.log("child clicked")
// },true);  

// GrandParent clicked -> prent clicked ->child clicked




// 3). mix :

// gp.addEventListener('click' , ()=>{
//     console.log("grandParnet clicked");
// } , false) 

// parent.addEventListener('click', ()=>{
//     console.log("Parent Clicked");
// },true) ;

// child.addEventListener('click', ()=>{
// console.log("child clicked")
// },false);  

// parent clicked -> child clicked -> grandparent clicked 



// 4) stopPropagation : if we do not want any bubbling or capture to hapeen at a particular point , then we can use stopPropagation . 

gp.addEventListener('click' , ()=>{
    console.log("grandParnet clicked");
} , false) 

parent.addEventListener('click', (event)=>{
    console.log("Parent Clicked"); 
    event.stopPropagation();
},false) ;

child.addEventListener('click', ()=>{
console.log("child clicked")
},false);   

// child -> parent 

// Here the event stoped at parent and did not propagated further. 

