
function Timer(){
const Olympicdate=new Date("2028-7-21");
const today=new Date();

const time_remaining=Olympicdate-today;

const Days=Math.floor(time_remaining/(1000*60*60*24));
const Hours=Math.floor(time_remaining/(1000*60*60)%24);
const Minutes=Math.floor(time_remaining/(1000*60)%60)
const Seconds=Math.floor(time_remaining/(1000)%60);


document.getElementById('Days').innerHTML=Days;
document.getElementById('Hours').innerHTML=Hours;
document.getElementById('Minutes').innerHTML=Minutes;
document.getElementById('Seconds').innerHTML=Seconds; 
} 

setInterval(Timer,1000); 