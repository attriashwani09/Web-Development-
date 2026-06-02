

document.body.addEventListener('click',(event)=>{
    const circle=document.createElement('div');
    circle.className="circle";

    const x=event.clientX;
    const y=event.clientY;

    circle.style.left=`${x-25}px`;
    circle.style.top=`${y-25}px`
    const color=["red","green","blue","purple","orange","yellow","wheat","pink"];

    const text1=["Hi","Hello","welcome","Thanks","Hola","Great"];

    circle.textContent=text1[Math.floor(Math.random()*text1.length)]
    circle.style.backgroundColor=color[Math.floor(Math.random()*color.length)];

    document.body.appendChild(circle);
    //circle.style.backgroundColor="red" 


    setTimeout( ()=>{
        circle.remove();
    } ,5000)
})