const questionBank = [
    {
        question: "Who is known as the 'God of Cricket'?",
        options: ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "Brian Lara"],
        correct: "Sachin Tendulkar"
    },
    {
        question: "Which country won the first Cricket World Cup in 1975?",
        options: ["Australia", "India", "West Indies", "England"],
        correct: "West Indies"
    },
    {
        question: "How many players are there in a cricket team?",
        options: ["10", "11", "12", "9"],
        correct: "11"
    },
    {
        question: "Who has the highest number of international centuries?",
        options: ["Rohit Sharma", "Virat Kohli", "Sachin Tendulkar", "Steve Smith"],
        correct: "Sachin Tendulkar"
    },
    {
        question: "Which bowler has taken the most Test wickets?",
        options: ["Shane Warne", "James Anderson", "Muttiah Muralitharan", "Anil Kumble"],
        correct: "Muttiah Muralitharan"
    },
    {
        question: "Which country hosts the Indian Premier League (IPL)?",
        options: ["England", "UAE", "Australia", "India"],
        correct: "India"
    },
    {
        question: "Who is the current captain of the Indian Test team (2024)?",
        options: ["Rohit Sharma", "Hardik Pandya", "KL Rahul", "Virat Kohli"],
        correct: "Rohit Sharma"
    },
    {
        question: "Where is the Eden Gardens stadium located?",
        options: ["Delhi", "Kolkata", "Mumbai", "Chennai"],
        correct: "Kolkata"
    },
    {
        question: "What is the maximum number of overs in an ODI match?",
        options: ["20", "50", "60", "40"],
        correct: "50"
    },
    {
        question: "Who won the ICC T20 World Cup 2022?",
        options: ["India", "Pakistan", "England", "Australia"],
        correct: "England"
    },
    {
        question: "Which batsman has the highest individual ODI score (264)?",
        options: ["Rohit Sharma", "Martin Guptill", "Chris Gayle", "David Warner"],
        correct: "Rohit Sharma"
    },
    {
        question: "Which team has won the most IPL titles?",
        options: ["CSK", "MI", "KKR", "SRH"],
        correct: "MI"
    },
    {
        question: "Who is the first Indian to take a hat-trick in Test cricket?",
        options: ["Kapil Dev", "Anil Kumble", "Harbhajan Singh", "Ishant Sharma"],
        correct: "Harbhajan Singh"
    },
    {
        question: "What is the shape of a cricket field?",
        options: ["Square", "Round", "Rectangular", "Hexagonal"],
        correct: "Round"
    },
    {
        question: "Who was the captain when India won the 2011 ICC World Cup?",
        options: ["Sachin Tendulkar", "Virat Kohli", "MS Dhoni", "Gautam Gambhir"],
        correct: "MS Dhoni"
    },
    {
        question: "Which cricketing term refers to scoring zero runs?",
        options: ["Century", "Duck", "No Ball", "Yorker"],
        correct: "Duck"
    },
    {
        question: "Which of these is NOT a fielding position?",
        options: ["Gully", "Mid-on", "Silly Point", "Half-line"],
        correct: "Half-line"
    },
    {
        question: "Who holds the record for fastest T20 international century?",
        options: ["Chris Gayle", "Rohit Sharma", "David Miller", "Suryakumar Yadav"],
        correct: "David Miller"
    },
    {
        question: "What is the length of a cricket pitch?",
        options: ["22 yards", "18 yards", "25 yards", "20 yards"],
        correct: "22 yards"
    },
    {
        question: "Who is the only bowler to take 10 wickets in a Test innings for India?",
        options: ["Irfan Pathan", "Harbhajan Singh", "Anil Kumble", "Zaheer Khan"],
        correct: "Anil Kumble"
    }
];




function RandomQuestion(){
   
    // 1st way : Use Sets ( Not fully Optimized )
    // const data=new Set();

    // while(data.size!=5){
    //     const index=Math.floor(Math.random()*20);
    //     data.add(questionBank[index]);
    // } 

    // // converting the set into array.
    // return [...data]; 


    // 2nd way : By randomnly sorting the array. 
    // questionBank.sort( ()=> Math.random()-0.5);
    // return questionBank.slice(0,5);

    // 3rd way : fisher algorithm  => gives 0log(n) Tc



    // 4th way => swaping the cur quest with last of question bank and then decreasing the value
    const length=questionBank.length;
    const arr=[];

    for(let i=0;i<5;i++){
        const index=Math.floor(Math.random()*length);
        arr.push(questionBank[index]);

        // swapping curr ques with last and decreasing the length value by 1 
        // by this way the curr ques will move back to last and then length decrease by 1 so it would become inaccesible for loop to return it again. By this way , at every itearction we would surely get a newquestion every time.

        [questionBank[index],questionBank[length-1]]=[questionBank[length-1],questionBank[index]];
    }

    return arr;
} 


const form=document.querySelector('form');
const problems=RandomQuestion();

const correct_ans={};   // empty



problems.forEach((obj,index)=>{
    const div_element=document.createElement('div');
    div_element.className='question';

    const para=document.createElement('p');
    para.innerText= `${index+1}. ${obj['question']}`;
    div_element.appendChild(para); 

    // storing the correct answers of the selected questions.
    correct_ans[`q${index+1}`]=obj['correct'] ;


    obj['options'].forEach((data)=>{
        
        const label_element=document.createElement('label');
        const input=document.createElement('input');
        input.type='radio';
        input.name=`q${index+1}`;
        input.value=data; 

        label_element.appendChild(input);
        label_element.appendChild(document.createTextNode(data));

        div_element.appendChild(label_element);
        div_element.appendChild(document.createElement('br'));
    })


    form.appendChild(div_element);
})  


// Creating Submit Button 

const btn=document.createElement('button');
btn.type='submit';
btn.innerText='Submit';

form.appendChild(btn);


// NOw checking the Results 
form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const data=new FormData(form);

    const answer=Array.from(data.values());

    let res=0;

    for(let [key,value] of data.entries()){
        if(value===correct_ans[key]){
            res++;
        }
    } 

    const out=document.getElementById('out');
    out.innerText=`${res} out of 5 are correct.`
})
