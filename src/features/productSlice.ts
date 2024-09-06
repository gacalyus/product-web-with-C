
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductItem } from "../models/productModel/product";


const initialState: ProductItem[] = [];

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<any>) => {
            state = action.payload;
            return state;
        },
    }
})

export default productSlice.reducer;
export const { add } = productSlice.actions