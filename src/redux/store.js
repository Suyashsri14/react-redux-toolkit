import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./slice"
import productReducer from "./ProductSlice"




const store = configureStore({
    reducer: {
        cart : cartReducer,
        products : productReducer
    }
})

export default store;

