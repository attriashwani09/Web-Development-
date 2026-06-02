const red=document.getElementById('red');
const green=document.getElementById('green');
const blue=document.getElementById('blue');
const orange=document.getElementById('orange');
const purple=document.getElementById('purple');

// 1). Using seperate event listner

// red.addEventListener('click', ()=> {
//     document.body.style.backgroundColor='red';
// })

// green.addEventListener('click', ()=> {
//     document.body.style.backgroundColor='green';
// })

// blue.addEventListener('click', ()=> {
//     document.body.style.backgroundColor='blue';
// })

// orange.addEventListener('click', ()=> {
//     document.body.style.backgroundColor='orange';
// }) 

// purple.addEventListener('click', ()=> {
//     document.body.style.backgroundColor='purple';
// }) 



// 2). To Optimize this code we can use for each loop. (Even though it will print same 5 statements but now we have to write less line of code).

// const buttons=document.querySelectorAll('button');
// const body=document.body;

// buttons.forEach((button)=>{

//     button.addEventListener('click',()=>{
//         body.style.backgroundColor=button.id;
//     })
// }) 



// 3). Evenet Delegation : Here we use Event Bubbeling . Instaed  of operating on child elements , we can directly operate on the Parent tag . This process is called event delegation .

const root=document.getElementById('root');
const body=document.body;

root.addEventListener('click' , (event)=>{
    //console.log(event.target.id);
    if(event.target.tagName==='BUTTON')
    body.style.backgroundColor=event.target.id;
})

