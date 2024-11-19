import React from "react";
import { useAppDispatch } from "../../store";
import { showToastMessage } from "./Toast";
import { AddCart } from "../../features/cartSlice";
import { ProductItem } from "../../models/productModel/product";



export const AddToCartCopm = () => {
    const dispatch = useAppDispatch();

    const addToCart = (product: ProductItem) => {
        dispatch(AddCart({ product: product, quantity: 1 }));
        showToastMessage("Ürün Sepete Eklendi !", "success");
    };

    return addToCart;
};
