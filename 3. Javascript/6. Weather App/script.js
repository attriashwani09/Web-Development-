document.querySelector('button').addEventListener('click',()=>{
    const place=document.getElementById('location').value;

    function updateTemp(data){
        const element=document.getElementById('WeatherInfo');
        element.innerHTML=`Today's Temperature : ${data.current.temp_c} 'C`
    }

    fetch(`http://api.weatherapi.com/v1/current.json?key=ae81b0bb33104f6fb2651636251712&q=${place}&aqi=yes`)
    .then(response=>response.json())
    .then(data=> updateTemp(data));
})