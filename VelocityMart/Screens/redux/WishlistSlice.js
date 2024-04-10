import { createSlice } from "@reduxjs/toolkit";


export const WishlistSlice = createSlice({
    name:'wishlist',
    initialState:{
        data:[]
    },
    reducers:{
        addWishlist(state,action){
            state.data.push(action.payload);
        },
        removeWishlist(state,action){
            state.data.pop(action,payload);
        }
    }
})

export const {addWishlist,removeWishlist}= WishlistSlice.actions;
export default WishlistSlice.reducer;