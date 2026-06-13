import { useSelector , useDispatch } from "react-redux";
import Card from "./Card" ; 
import { fetchInfo } from "./slicer1" ;
import { useEffect } from "react";


function CryptoComponent(){  

    const dispatch = useDispatch() ;

    useEffect( ()=>{
        dispatch( fetchInfo() ) ;
    } , [dispatch])

    const { data , loading , error } = useSelector( (state) => state.Slice1 ) ; 

    if( loading == true ){
        return(
            <h1> Loading ... </h1>
        )
    } 


    if(error != null){
        return(
            <h2> { error } </h2>
        )
    }

    return(
        < div  style={ { display : "flex" , flexWrap : "wrap" , alignItems : "center" , justifyContent : "center" } }>  
        { 

        data.map( (value) =>{
            return <Card key = {value.id}  image = {value.image} name = {value.name}  price = {value.current_price} ></Card>
        } )  

        }
        </div>
    )

} 

export default CryptoComponent ;