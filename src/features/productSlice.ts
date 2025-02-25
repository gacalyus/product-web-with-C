
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductItem } from "../models/productModel/product";
import { ListResponseModel } from "../models/listResponseModel";
import axios from "axios";
import { showToastMessage } from "../components/customComponents/Toast";


export const initialState: ListResponseModel<ProductItem[]> = {
    data: [],
    success: false,
    message: '',
    loading: false,
    error: ''
};

// API isteğini yapan genel fonksiyon
const fetchData = async (url: string): Promise<ListResponseModel<ProductItem[]>> => {
    const response = await axios.get<ListResponseModel<ProductItem[]>>(url);
    return response.data;
};


// Ürün listesini çeken thunk
export const fetchList = createAsyncThunk("product/fetchList", async () => {
    return fetchData("/api/products/getall");
});

// Belirli bir kategoriye ait ürünleri çeken thunk
export const getAllbyCategoryid = createAsyncThunk("product/getAllbyCategoryid", async (id: number) => {
    return fetchData(`/api/products/getallbycategoryid?id=${id}`);
});


const postData = async (
    url: string,
    product: ProductItem
): Promise<ListResponseModel<ProductItem>> => {
    try {
        const response = await axios.post<ListResponseModel<ProductItem>>(url, product);
        showToastMessage(response.data.message, "success");
        return response.data;
    } catch (error: any) {
        showToastMessage(error.response?.data?.message, "warning");
        console.error("API Hatası:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "Ürün eklenirken bir hata oluştu!");
    }
};

export const addProduct = createAsyncThunk(
    "product/add",
    async (product: ProductItem, { rejectWithValue }) => {

        try {
            return await postData("/api/products/add", product);
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);


const setLoadingState = (state: typeof initialState) => {
    state.loading = true;
    state.error = "";
};

const setFulfilledState = (state: typeof initialState, action: PayloadAction<ListResponseModel<ProductItem[]>>) => {
    state.data = action.payload.data;
    state.loading = false;
};

const setRejectedState = (state: typeof initialState) => {
    state.loading = false;
    state.error = "Bir hata oluştu!";
};

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchList.pending, setLoadingState)
            .addCase(fetchList.fulfilled, setFulfilledState)
            .addCase(fetchList.rejected, setRejectedState)
            .addCase(getAllbyCategoryid.pending, setLoadingState)
            .addCase(getAllbyCategoryid.fulfilled, setFulfilledState)
            .addCase(getAllbyCategoryid.rejected, setRejectedState)

            // POST: Yeni ürün ekleme işlemleri
            .addCase(addProduct.pending, setLoadingState)
            .addCase(addProduct.fulfilled, (state, action: PayloadAction<ListResponseModel<ProductItem>>) => {
                state.data = [...state.data, action.payload.data]; // Yeni ürünü mevcut listeye ekle
                state.loading = false;
                state.message = action.payload.message || "Ürün başarıyla eklendi!";
            })
        builder.addCase(addProduct.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload || "Bir hata oluştu!";
            state.message = action.payload
        })
        // .addCase(addProduct.rejected, setRejectedState);
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