import React , {useState , useEffect , useMemo, use } from "react"; 
import ReactDOM from "react-dom/client"; 


function App(){ 

    const [ count , setCount ] = useState( 0 ) ;  
    const [ number , setNumber ] = useState( 0 ) ; 

    // const [fibNum , setFibNum ] = useState( 0 ) ;

    function Fibbonacci( num ){ 

        if( num <= 1)
            return num ;

        return Fibbonacci( num - 1 ) + Fibbonacci( num - 2 ) ;

    }

    // useEffect( () =>{
        
    //     const result = Fibbonacci( number ) ; 

    //      setFibNum( result ) ; 

    // } , [number]) ; 

    // Don't use useEffect here , because it keeps re-rendering the fibbonaci number and does calculations again and agian after every Increment or decrement too .
    // Intead use useMemo . It memoizes (stores/caches) a calculated value so React does not recalculate it unnecessarily. 


    const fibNum = useMemo( ()=>{
        return Fibbonacci( number ) ;
    }, [number]) ;


    



    return(
        <> 
        <div className="Fib" >  
            <h2> Fibbonacci Number  : { fibNum } </h2>
            <input type="Number" value={number} onChange={ (e)=> setNumber( e.target.value )} />
            
        </div>  

        <div className="Counter">
        <h1> count : { count }  </h1> 
        <button onClick={ ()=> setCount( count + 1 )}> Increment </button> 
        <button onClick={ ()=> setCount( count - 1 )}> Decrement </button> 
        </div>
        </>
    )

} 

const root = ReactDOM.createRoot(document.querySelector(".root")) ;

root.render( <App> </App>)