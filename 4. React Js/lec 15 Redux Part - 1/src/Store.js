import { configureStore } from "@reduxjs/toolkit";  
import counterSlicer from "./Components/Slicer1" ;

export const stores = configureStore({

    reducer : {
        slice1 : counterSlicer  , 

        // user : userSlicer  ( If more slicer needs to be added ) 

    }
}) 

