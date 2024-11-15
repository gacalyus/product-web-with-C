import { ProductItem } from "../../models/productModel/product";

export function FilterSearch(productList: ProductItem[], filterText: string) {

    filterText = filterText ? filterText.toLocaleLowerCase() : "";


    return filterText ? productList.filter((p: ProductItem) => !p.productName.toLocaleLowerCase().indexOf(filterText)) : [];

}
