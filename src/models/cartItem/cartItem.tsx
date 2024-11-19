import { ProductItem } from "../productModel/product";

export interface CartItem {
    product: ProductItem,
    quantity: number
}