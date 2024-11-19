import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../models/cartItem/cartItem";

export interface CartState {
    cartItems: CartItem[];
}

const initialState: CartState = {
    cartItems: [
        {
            product: {
                "productId": 4,
                "categoryId": 2,
                "productName": "Chef Anton's Cajun Seasoning",
                "unitsInStock": 53,
                "unitPrice": 22.0000
            },
            quantity: 2
        }
    ]
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    extraReducers: (builder) => { },
    reducers: {
        AddCart: (state, action: PayloadAction<CartItem>) => {
            console.log(action.payload);
            let def = [];
            def = state.cartItems;
            def.push(action.payload);
            state.cartItems = def;
            return state;
        },
    }
});

export const { AddCart } = cartSlice.actions
export default cartSlice.reducer;