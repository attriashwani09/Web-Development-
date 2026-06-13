import { configureStore } from "@reduxjs/toolkit";
import InfoSlicer from "./slicer1" ;

const store = configureStore({ 

    reducer : {
        Slice1 : InfoSlicer
    }

}) 

export default store ;