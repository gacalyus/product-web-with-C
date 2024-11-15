import { ProductItem } from "../../models/productModel/product";
import { showToastMessage } from "./Toast";

export function FilterSearch(productList: ProductItem[], filterText: string) {

    filterText = filterText ? filterText.toLocaleLowerCase() : "";


    return filterText ? productList.filter((p: ProductItem) => !p.productName.toLocaleLowerCase().indexOf(filterText)) : [];

}

export function AddToCart(product: ProductItem) {

    showToastMessage("Ürün Sepete Eklendi ! ", "success")
 
    
    return product;

}


