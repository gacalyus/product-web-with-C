import { ResponseModel } from "../responseModel";
import { ProductItem } from "./product";

export interface ProductResponseModel extends ResponseModel {
    data: ProductItem[]
}