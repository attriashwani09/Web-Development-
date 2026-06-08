import React, { useState } from "react"; 
import ReactDOM from "react-dom/client"; 
import Header from "./src/Header"; 
import Footer from "./src/Footer";    
import arr from "./utils/Arr";    
import Card from "./src/Card"









const root = ReactDOM.createRoot(document.querySelector(".root")) ;   



// const sortBtn = document.getElementById("sortButton") ; 

// sortBtn.addEventListener( 'click' , ()=>{

//     SortCards() ;  

    
 
// }) 

console.log( arr ) ;


function App(){  

     let [ A , UpdateArr ] = useState( arr ) ;

    function SortCards(){ 

    A.sort( ( a , b) => Number(a.price) - Number(b.price) ) ; 
    console.log( arr ) ;

    UpdateArr([...A]) ;

    }  


    function above750(){
        const B = arr.filter( (a) =>  Number(a.price) > 750 )

        UpdateArr( B ) ;
    }

    return ( 

        <> 

        <Header/>
        
        <button id="sortButton" onClick={SortCards}>   Sort List   </button>  

        <button id="above750" onClick={above750}> Above 750 </button>


        <div className="main"  > 
            {

            A.map( (value , index ) => <Card key = {index}  cloth = {value.cloth}  offer = {value.offer} price = {value.price} />  ) 

            }
        </div> 

        <Footer/>


        </>
    )
}






root.render( <App/>)