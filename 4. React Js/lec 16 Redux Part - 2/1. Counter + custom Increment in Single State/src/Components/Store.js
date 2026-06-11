import { configureStore } from "@reduxjs/toolkit"; 
import counterSlicer from "./Slicer1" ;

export const stores = configureStore( {

    reducer : {
        Slice1 : counterSlicer 
    }
})