import Card from "./Card";
import arr from "../utils/Arr";  
import SortCards from "./SortCards";

function Main(){

    return( 
        <> 
        <button id="sortButton" onClick={SortCards}>   Sort List   </button> 


        <div className="main"  > 
            {

            arr.map( (value , index ) => <Card key = {index}  cloth = {value.cloth}  offer = {value.offer} price = {value.price} />  ) 

            }
        </div>  

        </> 
    )
} 

export default Main ;