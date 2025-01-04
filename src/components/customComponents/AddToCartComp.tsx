import React from "react";
import { useAppDispatch } from "../../store";
import { showToastMessage } from "./Toast";
import { AddCart, RemoveCart } from "../../features/cartSlice";
import { ProductItem } from "../../models/productModel/product";

export const AddToCartCopm = () => {
  const dispatch = useAppDispatch();

  const addToCart = (product: ProductItem, add: Boolean) => {
    if (add) {
      dispatch(AddCart({ product: product, quantity: 1 }));
      showToastMessage("Ürün Sepete Eklendi !", "success");
    } else {
      dispatch(RemoveCart({ product: product, quantity: 1 }));
      showToastMessage("Ürün Silindi!", "warning");
    }
  };

  return addToCart;
};
