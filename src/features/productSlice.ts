
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductItem } from "../models/productModel/product";
import { ListResponseModel } from "../models/listResponseModel";
import axios from "axios";


export const initialState: ListResponseModel<ProductItem[]> = {
    data: [],
    success: false,
    message: '',
    loading: false,
    error: ''
}

export const fetchList = createAsyncThunk("fetchList", async () => {
    const response = await axios.get<ListResponseModel<ProductItem>[]>("/api/products/getall");
    return response.data;
})

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchList.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchList.fulfilled, (state, action: PayloadAction<any>) => {
            state.data = action.payload.data;
            state.loading = false;
        })
        builder.addCase(fetchList.rejected, (state, action) => {
            state.loading = false;
            state.error = "Bir hata oluştu!";
        })
    },
    reducers: {
        // add: (state, action: PayloadAction<any>) => {
        //     state = action.payload;
        //     return state;
        // },
    }
})

export default productSlice.reducer;
// export const { } = productSlice.actions