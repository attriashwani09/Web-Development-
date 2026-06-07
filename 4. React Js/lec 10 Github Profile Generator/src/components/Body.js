import React , {useState , useEffect} from "react"; 
import ReactDOM from "react-dom/client"; 


function Body() { 

    const [ total , setTotal ] = useState( 10 )

    const [ Profile , setProfile ] = useState( [] );

    async function generateProfiles(){

        const response = await fetch(`https://api.github.com/users?per_page=${ total}`) ;

        const data = await response.json() ; 

        setProfile( data ) ;
    } 


    useEffect( ()=>{
        generateProfiles() ; 
    } , [] ) ; // Due to empty dependencies , function will only be called once 


    return (  

        <>

        <input type="Number" value={ total } onChange={ (e)=> setTotal( e.target.value ) } /> 

        <button onClick={ generateProfiles}> Fetch {total} Profiles </button>

        <div className="AllProfiles"> 

            {
                Profile.map( (value)=>{ 

                    return (  
                    
                    <div className="Cards" key={value.id}>  

                    <img src={value.avatar_url}  alt="Profile Image"/> 

                    <h2> {value.login} </h2> 

                    <a href={value.html_url} target="_blank"> Profile </a>

                    </div> 

                    )
                })
            }
        </div> 

        </>
    )
} 


export default Body ;