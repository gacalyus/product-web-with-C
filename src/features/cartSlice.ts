import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../models/cartItem/cartItem";

export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [
    {
      product: {
        productId: 4,
        categoryId: 2,
        productName: "Chef Anton's Cajun Seasoning",
        unitsInStock: 53,
        unitPrice: 22.0,
      },
      quantity: 2,
    },
  ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddCart: (state, action: PayloadAction<CartItem>) => {
      const newCartItem = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.product.productId === newCartItem.product.productId
      );

      if (existingItem) {
        existingItem.quantity += newCartItem.quantity;
      } else {
        state.cartItems.push(newCartItem);
      }
    },
    RemoveCart: (state, action: PayloadAction<CartItem>) => {
      const newCartItem = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.product.productId === newCartItem.product.productId
      );

      if (existingItem) {
        existingItem.quantity -= newCartItem.quantity;
      } else {
        state.cartItems.filter(
          (item) => item.product.productId !== newCartItem.product.productId
        );
      }
    },
  },
});

export const { AddCart, RemoveCart } = cartSlice.actions;
export default cartSlice.reducer;

// sgk , bordro , ruhsat
