import React from "react"; 
import ReactDOM from "react-dom/client"; 
import {Provider} from "react-redux" ;
import { store } from "./components/Store";
import Header from "./components/Header" 
import Info from "./components/Info";


function App(){

    return( 
        <>
            <Provider store={store}>
                <Header></Header>
                <Info></Info>
            </Provider>
        </>
     )

} 

const root = ReactDOM.createRoot( document.querySelector(".root"));
root.render( <App></App> ) ;