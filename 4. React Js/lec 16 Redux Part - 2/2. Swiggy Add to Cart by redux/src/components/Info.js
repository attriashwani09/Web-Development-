import { useState } from "react";
import { addToCart , removeFromCart } from "./cartSlice";
import Cards from "./Cards";

const details = [ { id : 1 , Item : "Pizza" , Price : "200" } ,
                  { id : 2 , Item : "Pasta" , Price : "350" } ,
                  { id : 3 , Item : "Thali" , Price : "1290" } ,
                  { id : 4 , Item : "Dosa" , Price : "450" } ,
                  { id : 5 , Item : "Paneer" , Price : "500" } ,
                  { id : 6 , Item : "Samosa" , Price : "25" } ,
                  { id : 7 , Item : "ROTI" , Price : "10" } ,
                  { id : 8 , Item : "IDLI" , Price : "100" } ,
                  { id : 9 , Item : "VADA PAW" , Price :"200" } ,
                  { id : 10 , Item : "Pizza" , Price : "300" } ] ;



export default function Info(){  


    


    return(
            <div className="cards">
            {
            details.map( (value) => (

                <Cards value = {value} key = {value.id} ></Cards>

            ))}

        </div> 
        
    )



} 



