import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsThunk = createAsyncThunk("/product/get", async () => {
    const res = await axios.get("http://localhost:3169/products")
    return res.data
})

export const postProductsThunk = createAsyncThunk("/products/post", async (data) => {
    await axios.post("http://localhost:3169/products", data)
    return data
})

export const deleteProductsThunk = createAsyncThunk("/products/delete", async (id) => {
    await axios.delete(`http://localhost:3169/products/${id}`)
    return id
})

const productSlice = createSlice({
    name : "product",
    initialState: {

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder

        .addCase(getProductsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })

        .addCase(getProductsThunk.pending, (state) => {
            state.loading = true
        })

        .addCase(getProductsThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })

        .addCase(postProductsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.data.push(action.payload)
        })

        .addCase(deleteProductsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.data = state.data.filter((item) => item._id != action.payload)
        })
    }
})

export default productSlice.reducer