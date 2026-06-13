import { createSlice , createAsyncThunk, } from "@reduxjs/toolkit" ; 

export const fetchInfo = createAsyncThunk(

    "CryptoInfo" , 

    async () => { 

        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20`) ;

        const data = await response.json() ;

        return data ;
        
    }
) 


const Slicer1 = createSlice({
    name : "CryptoSlice" , 


    initialState : {
        data : [] , 
        loading : false , 
        error : null 
    } , 


    reducers : {} ,


    extraReducers : (builder) => {
        builder

        .addCase( fetchInfo.pending , (state)=>{
            state.loading = true ;
        })

        .addCase( fetchInfo.fulfilled , (state , action ) =>{
            state.loading = false ; 
            state.data = action.payload ;
        }) 

        .addCase( fetchInfo.rejected , ( state , action) =>{
            state.loading = false ; 
            state.error = action.error.message ;
        })

    }
})  


export default Slicer1.reducer ;