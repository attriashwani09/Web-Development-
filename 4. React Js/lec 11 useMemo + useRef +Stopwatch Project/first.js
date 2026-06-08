import React , {useState , useEffect , useMemo, useRef  } from "react"; 
import ReactDOM from "react-dom/client"; 


function App(){ 

    const [ count , setCount ] = useState( 0 ) ;  
    
    
    // let money = 0 ;  
    // The problem Here is , when we just increase the money count , it increases every time ( in console ) , but when we try to increase the counter count , it gets redeered and money again get set at 0 . 
    // to solev this problem we have to use useRef  

    let money = useRef(0); 

    // useRef returns an object and in that object value is stores in current 
    // money = { current : 0 }


    
    return(
        <> 
        <div className="Fib" >  
            <h2> Fibbonacci Number  : { money.current } </h2>
            <button onClick={ ()=>{ 
                money.current = money.current + 1;

                console.log(money) ;
            } }>   Increment  </button> 
            
        </div>  

        <div className="Counter">
        <h1> count : { count }  </h1> 
        <button onClick={ ()=> setCount( count + 1 )}> Increment </button> 
        
        </div>
        </>
    )

} 

const root = ReactDOM.createRoot(document.querySelector(".root")) ;

root.render( <App> </App>)