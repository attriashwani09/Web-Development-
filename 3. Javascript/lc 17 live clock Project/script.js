

function displayTime(){
const timer=document.getElementById('root');
const now=new Date();
const currTime=now.toLocaleTimeString();
timer.innerHTML=currTime;
}


setInterval(displayTime,1000);


// timer.innerHTML='Hello WOrld'; 
const timer=document.getElementById('root');
timer.style.fontSize="150px"; 
timer.style.display="flex";
timer.style.alignItems="center";
timer.style.justifyContent="center"; 
timer.style.height='100vh'; 


