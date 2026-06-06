import React , {useState , useEffect, useCallback} from "react"; 
import ReactDOM from "react-dom/client" ;

const root = ReactDOM.createRoot( document.querySelector(".root") ) ; 

function PasswordGenerator(){ 

    const [length , setLength ] = useState(5) ;
    const [checkNumber , setCheckNumber ] = useState( false ) ;
    const [checkCharacter , setCheckCharacter ] =  useState( false ) ;
    const [ Password , setPassword ] = useState( "" ) ;   
    
    
    // UseCallback : By default, every function declared inside a functional component is entirely recreated on every single render. Wrapping your function in useCallback saves its reference. It will only provide a new function reference if its listed dependencies change .

    const generatePassword = useCallback( () => {

        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" ; 

        if( checkNumber ){
            str += "0123456789" ;
        } 

        if( checkCharacter ){
            str += "!@#$%^&*()~" ;
        }  

        let pass = "" ;

        for(let i=0 ; i<length ; i++ ){

          let idx =  Math.floor( Math.random() * str.length ) ; 

          pass += str[idx] ;
        } 

        setPassword( pass ) ; 

    } , [ length , checkCharacter , checkNumber ] ) ;

    
   


    useEffect( ()=>{

        generatePassword() ;

    } , [generatePassword]) ; 

    // Here we have laready passed all the dependencies to the useCallback in generatePassword , so here instead of again mentioning dependencies we can just mention function name in Array 



    return(
        <> 
        <h1> {Password} </h1> 

        <div className="options"> 

            <input type="range" min={5} max={20} defaultValue={10} onChange={(e)=>{ setLength(e.target.value)}} /> 
            <label > length : {length}  </label> 

            <input type="checkbox" defaultChecked = {checkNumber} onChange={ ()=>setCheckNumber( !checkNumber) } /> 
            <label> Number </label> 

            <input type="checkbox" defaultChecked = {checkCharacter} onChange={ ()=> setCheckCharacter( !checkCharacter)} /> 
            <label> Character </label> 
        </div>
        </>
    )
} 



root.render( <PasswordGenerator></PasswordGenerator>)