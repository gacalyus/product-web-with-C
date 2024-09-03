import { ResponseModel } from "../responseModel";
import { CategoryItem } from "./category";

export interface CategoryResponseModel extends ResponseModel {
    data: CategoryItem[]
}