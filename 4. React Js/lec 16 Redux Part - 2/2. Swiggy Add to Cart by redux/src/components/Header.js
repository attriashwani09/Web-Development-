import { useSelector , useDispatch } from "react-redux" ;

export default function Header(){ 

    const count = useSelector( (state) => state.Slice1.count ) ;

    return (
        <> 
        <h2 style={ { fontSize : "50px" , textAlign : "center" , backgroundColor : "lightgreen" }} > Cart ( { count } ) </h2>
        </>
    )
} 

