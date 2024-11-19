import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productSlice from "../features/productSlice";
import categorySlice from "../features/categorySlice";
import cartSlice from "../features/cartSlice";

const store = configureStore({
    reducer: {
        product: productSlice,
        category: categorySlice,
        cart: cartSlice
    }
})

export default store;


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;