import { Outlet , Link } from "react-router-dom";


export default function Details(){

    return( 

        <>
        <nav>
            <Link  to="NestedDetails2" > NestedDetails2 </Link>
            <Link  to="NestedDetails1" > NestedDetails1 </Link>
        </nav>
         

            <h1> This is Details Page .</h1>
            <Outlet></Outlet>
        </>
    )
}