import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListResponseModel } from "../models/listResponseModel";
import axios from "axios";
import { CategoryItem } from "../models/categoryModel/category";

export interface CategoryState {
    value: ListResponseModel<CategoryItem[]>;
    activeCategory: number;
}

const initialState: CategoryState = {
    value: {
        data: [],
        success: false,
        message: '',
        loading: false,
        error: '',
    },
    activeCategory: 0
}

export const fetchCategoryList = createAsyncThunk("fetchCategoryList", async () => {
    const response = await axios.get<ListResponseModel<CategoryItem>[]>("/api/category/getallcategory");
    return response.data;
});

const categorySlice = createSlice({
    name: "category",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryList.pending, (state, action) => {
            state.value.loading = true;
            state.value.error = "";
        });
        builder.addCase(fetchCategoryList.fulfilled, (state, action: PayloadAction<any>) => {
            state.value.data = action.payload.data;
            state.value.loading = false;
        });
        builder.addCase(fetchCategoryList.rejected, (state, action) => {
            state.value.loading = false;
            state.value.error = "Bir hata oluştu"
        })
    },
    reducers: {
        changeActiveCategory: (state, action: PayloadAction<number>) => {
            state.activeCategory = action.payload;
            return state;
        },
    }
});

export const { changeActiveCategory } = categorySlice.actions
export default categorySlice.reducer;