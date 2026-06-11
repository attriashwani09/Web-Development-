import { useActionState, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom"

export default function Github(){ 

    const {name} = useParams() ; 

    const [ Profile , setProfile ] = useState( null ) ; 

    

    async function FetchUser(){

        const response = await fetch(`https://api.github.com/users/${name}`) ;

        const data = await response.json() ;

        setProfile( data ) ;
        
    } 


    useEffect(  ()=>{ 

        FetchUser() ;

    } , [] )

    return(
        <>
        <h1> THis is Github Page . </h1> 

        <div>
            <img src={Profile?.avatar_url}></img> 
            <h2> Name : {Profile?.login}</h2> 
        </div>
        </>
    )
}