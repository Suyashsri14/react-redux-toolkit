import {createSlice} from '@reduxjs/toolkit'

const addedItems = localStorage.getItem('cart');

const initialState = {
    items: addedItems ? JSON.parse(addedItems):[]
}

const addtoCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem:(state, action)=>{
            // state.value += 1;
            console.log(action.payload);
            state.items.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state.items))
        },
        removeItem: (state, action)=>{
            const cartData = state.items.filter(item=> item.id != action.payload.id);
            state.items = cartData;
            localStorage.setItem('cart', JSON.stringify(state.items));
           
        },
        clearAllItems: (state)=>{
            state.items.length = 0;
        }
    }

})

export const {addItem, removeItem, clearAllItems} = addtoCart.actions;
export default addtoCart.reducer;