import {createSlice} from "@reduxjs/toolkit" ;

const CartSlice = createSlice({

    name : 'counter' , 
    initialState : { count : 0 } , 
    reducers : {

        addToCart : (state) => { state.count ++ } ,
        removeFromCart : (state) => { state.count -- } 
    }
}) 

export const { addToCart , removeFromCart } = CartSlice.actions ;

export default CartSlice.reducer ;