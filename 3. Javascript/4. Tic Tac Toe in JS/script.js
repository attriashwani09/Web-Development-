let turn='O';
total_turn=0;
const board=document.querySelector(".board");

const winner=[ [0,1,2],[3,4,5],[6,7,8],
               [0,3,6],[1,4,7],[2,5,8],
               [0,4,8],[2,4,6]];

const board_array=new Array(9).fill("E");

function CheckWinner() {
    for(let [index0,index1,index2] of winner){
        // console.log(i);
        if(board_array[index0]!='E' && board_array[index0]===board_array[index1] && board_array[index1]===board_array[index2]){
            return 1;
        }
    } 

    return 0;
} 

const EventCallBackFunc=(event)=>{
    
    const element=event.target;
    total_turn++;
    if(board_array[element.id]==='E'){
    if(turn==='O'){
        element.innerText='O';
        board_array[element.id ]='O';
        if(CheckWinner()){
            document.getElementById('result').innerHTML="Winner is O";
            board.removeEventListener('click',EventCallBackFunc);
            return;
        };
        turn='X'
    }
    else{
        element.innerText=turn;
        board_array[element.id ]='X';
        if(CheckWinner()){
        document.getElementById('result').innerHTML="Winner is X";
        board.removeEventListener('click',  EventCallBackFunc);
        return;
        };
        turn='O'
    } 
    
    if(total_turn==9){
        document.getElementById('result').innerHTML="Match is Draw"
    }
  }
    
}

board.addEventListener('click' , EventCallBackFunc);


const restart=document.getElementById("restart");
restart.addEventListener('click' , (event)=>{
    const cells=document.getElementsByClassName('box');
    Array.from(cells).forEach((value)=>{
        value.innerHTML='';
    })
    turn='O';
    total_turn=0;

    board_array.fill("E");
    document.getElementById('result').innerHTML="";
    board.addEventListener('click' , EventCallBackFunc);
})