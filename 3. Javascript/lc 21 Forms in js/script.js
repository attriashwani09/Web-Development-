const form=document.querySelector('form');

// form.addEventListener('click' , (event)=>{
//     console.log(event); // pointer event 
//     console.log(event.target)
// }) 


// Types of Event in Form :
// 1) input 
// 2) change 
// 3) focus : focus doe not bubble , so it needs to be directly attached to input elements .
// focusin : Bubbles , so it can be attached to the form elemenet for event delegation .

// 4. Blur or focusout 
// 5. click
// 6. dblclick
// 7. submit 
// 8. reset 
// 9. FormData

// form.addEventListener('input' , (event)=>{
//     console.log(event.target.value)
// })  

// form.addEventListener('change' , (event)=>{
//     console.log(event.target.value)
// })  

// form.addEventListener('focusout' , (event)=>{
//     console.log(event.target.value);
// }) 

// form.addEventListener('click' , (event)=>{
//     console.log("single click")
// }) 

// form.addEventListener('dblclick' , (event)=>{
//     console.log("double click")
// })  

// form.addEventListener('submit' , (event)=>{
//     console.log("form submitted");
// })  
// Every time when we submit any form , the page gets automatically reloaded. 
// To overcome this issue , we can use preserve log in console. 


form.addEventListener('reset' , (event)=>{
    console.log("form reset");
}) 
// to do reset operation , just change the button type to reset from submit (in HTML) .




// Accessing the value of the form 
 form. addEventListener('submit' , (event)=>{

    event.preventDefault(); // Stops the page from reloading itesllf after the submission of the form.

//     const first= document.getElementById('first');
//     console.log(first.value); 

//     const second= document.getElementById('second');
//     console.log(second.value); 

//     const third= document.getElementById('third');
//     console.log(third.value); 

//     // creating a new element .
//     const elemenet=document.createElement('div');
//     elemenet.innerText=`My name is ${first.value} ${second.value} .`

//     const parent=document.getElementById('top');
//     form.append(elemenet);
    
 })

// Here we were accessing all the elements manually and seperately to get access to  the data . Instead of this we can use FormData (it is an API that is used to fetchdata from the form , when submitted). 



//9). FormData :
     form.addEventListener('submit' , (event)=>{

        const data=new FormData(form);

    // gives an iterator
    //console.log(data.keys());


    // iterating using for loop
    for(let [keys,value] of data.entries()){
        console.log(keys ,value );
    }
    

    // Coverting it to array than access values
    // console.log(Array.from(data.keys()));
    // console.log(Array.from(data.entries()));

     })
    







