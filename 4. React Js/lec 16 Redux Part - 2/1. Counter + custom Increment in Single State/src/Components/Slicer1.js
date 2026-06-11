import {createSlice } from "@reduxjs/toolkit" ;


const counterSlice = createSlice( {

    name : "Counter" , 
    initialState : { count : 0 } , 
    reducers : {

        Increment : (state) => { state.count ++ } ,
        Decrement : (state) => { state.count -- } , 
        Reset : ( state ) => { state.count = 0 } , 
        customIncrement : ( state , actions ) => { state.count += actions.payload } 
    }
}) ;

export const { Increment , Decrement , Reset , customIncrement } = counterSlice.actions ;

export default counterSlice.reducer ;