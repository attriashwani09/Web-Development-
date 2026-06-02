let userScore = 0 ;
let compScore = 0 ;

let options = [ "rock" , "paper" , "scissors" ] ;

const choices = document.querySelectorAll(".choice") ; 

const userOutput = document.querySelector("#user-score") ;
const compOutput = document.querySelector("#comp-score") ;

const msg = document.querySelector("#output") ; 


// Update Color  
const changeColor = (color) =>{
    msg.style.backgroundColor = color ;
}


// Updating Result 
const updateResult = ( userWin , userChoice , compChoice ) => {

    if( userWin){
        userScore ++ ; 

        userOutput.innerText = userScore ; 

        msg.innerText = `User Win , ${userChoice} beats ${compChoice} . ` ; 

         changeColor( "green" ) ;

    } 
    else{

        compScore++ ;

        compOutput.innerText = compScore ; 

        msg.innerText = `Comp Win , ${compChoice} beats ${userChoice} .` 

        changeColor( "red" ) ;
    } 

   
} 


// Draw Condition 
const Draw = (userChoice) =>{
    msg.innerText = `Game Draw , Both Choose ${userChoice}` ; 
    
    changeColor("#081b31");
} 


// Checking Result 
const checkResult = ( userChoice , compChoice ) =>{

    if( userChoice === compChoice ){
    
        Draw( userChoice ) ;

    } 
    else{ 

        let userWin = true ; // Assume user already win 

        // If user choose rock 
        if( userChoice === "rock" ){ 

            userWin = compChoice == "scissors" ? true : false ; // only paper and scissors are remanining option , becuse if comp chooses rock , it leads to draw which is already checked  

        } 
        else if( userChoice == "scissors" ){
            
            userWin = compChoice == "paper" ? true : false ;
        } 
        else{
            userWin = compChoice == "rock" ? true : false ;
        } 

        updateResult( userWin , userChoice , compChoice ) ;
    }
}


// Play Game : means chack comp choice 

const playGame = (userChoice) =>{

    const index = Math.floor( Math.random() * 3 ) ;  // Take a random number from 0 ,1 and 2 

    const compChoice = options[index] ;   // that random number is comp choice 

    checkResult( userChoice , compChoice ) ;
}


// Take user input 
choices.forEach( (choice)=>{ 

    choice.addEventListener('click' , ()=>{

        const userChoice = choice.getAttribute("id") ;  // id of the image is user choice 

        playGame( userChoice ) ;
    })
} )