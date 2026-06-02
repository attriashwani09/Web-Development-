const correct_ans={q1:'Sachin Tendulkar' , q2: 'West-Indies' , q3:'264' , q4: 'Sachin Tendulkar' , q5: 'Rohit Sharma'}

const form=document.querySelector('form');

form.addEventListener('submit' , (event)=>{
    const data=new FormData(form);

    event.preventDefault();
    const answer=Array.from(data.values()); 

    let result=0;
    // for(let i=0; i< answer.length ; i++){
    //     if(answer[i]===correct_ans[i])
    //         result++;
    // }  

    for(let [key,value] of data.entries()){
        if(value===correct_ans[key])
            result++;
    }

    //console.log(result); 
    const out=document.getElementById('out');
    out.innerText=`${result} out of 5 is correct `;
})