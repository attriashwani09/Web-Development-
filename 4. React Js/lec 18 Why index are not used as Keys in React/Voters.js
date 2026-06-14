import { useState } from "react"; 
import Card from "./VoteCard";

export default function Candidates(){ 

    const [ Govt , setGovt ] = useState( ["BJP" , "Congress" , "AAP" ]) ;


    function AddParty(){

        setGovt( (prev) => [ "TVK" , ...prev] );

    } 


    return( 
        <>
        {
            Govt.map( (value , index ) => { return <Card key = {value} value = {value}></Card> } )
        }  

        <button onClick={ AddParty }> Add Party</button>
        </>
    )


}