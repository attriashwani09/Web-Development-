import React from "react"; 
import ReactDOM from "react-dom/client"; 
import Header from "./src/Header"; 
import Footer from "./src/Footer";  
import Main from "./src/Main";  
import arr from "./utils/Arr";   





// function SortCards(){

//     for(let i = 0 ; i < arr.length -1 ; i++ ){

//         for( let j= i+1 ; j < arr.length ; j++){

//             if( Number(arr[i].price) > Number( arr[j].price) ){
                
//                 [arr[i] , arr[j]] = [arr[j] , arr[i]] ;
//             }
//         }
//     }

        
// } 



const root = ReactDOM.createRoot(document.querySelector(".root")) ;   



// const sortBtn = document.getElementById("sortButton") ; 

// sortBtn.addEventListener( 'click' , ()=>{

//     SortCards() ;  

    

// })


function App(){

    return ( 

        <> 

        <Header/>
        
        <Main/>

        <Footer/>


        </>
    )
}






root.render( <App/>)