import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListResponseModel } from "../models/listResponseModel";
import axios from "axios";
import { CategoryItem } from "../models/categoryModel/category";

export const initialState: ListResponseModel<CategoryItem[]> = {
    data: [],
    success: false,
    message: '',
    loading: false,
    error: ''
}

export const fetchCategoryList = createAsyncThunk("fetchCategoryList", async () => {
    const response = await axios.get<ListResponseModel<CategoryItem>[]>("/api/category/getall");
    return response.data;
});

const categorySlice = createSlice({
    name: "category",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryList.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchCategoryList.fulfilled, (state, action: PayloadAction<any>) => {
            state.data = action.payload.data;
            state.loading = false;
        });
        builder.addCase(fetchCategoryList.rejected, (state, action) => {
            state.loading = false;
            state.error = "Bir hata oluştu"
        })
    },
    reducers: {}
});

export default categorySlice.reducer;