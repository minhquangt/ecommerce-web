import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosNormal from 'api/axiosNormal';

export const getAllProducts = createAsyncThunk('product/getAllProducts', async () => {
    try {
        const res = await axiosNormal.get('/api/product');
        return res.data;
    } catch (error) {
        console.log(error);
    }
});

export const getOneProduct = createAsyncThunk('product/getOneProduct', async (id) => {
    try {
        const res = await axiosNormal.get(`/api/product/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
});

export const getFavoriteProducts = createAsyncThunk('product/getFavoriteProducts', async () => {
    try {
        const res = await axiosNormal.get('/api/product/favorite');
        return res.data;
    } catch (error) {
        console.log(error);
    }
});

export const filterProducts = createAsyncThunk('product/filterProducts', async (searchTerm) => {
    try {
        const res = await axiosNormal.post('/api/product/filter', { productName: searchTerm });
        return res.data;
    } catch (error) {
        console.log(error);
    }
});

export const productSlice = createSlice({
    name: 'product',
    initialState: { products: { all: [], favorite: [], one: null, filter: [] } },
    extraReducers: {
        //getAllProducts
        [getAllProducts.pending]: (state, action) => {
            console.log('Fetching products from BE...');
        },
        [getAllProducts.fulfilled]: (state, action) => {
            console.log('Done');
            state.products.all = action.payload;
        },
        [getAllProducts.rejected]: (state, action) => {
            console.log('Rejected');
        },
        //getFavoriteProducts
        [getFavoriteProducts.pending]: (state, action) => {
            console.log('Fetching favorite products from BE...');
        },
        [getFavoriteProducts.fulfilled]: (state, action) => {
            console.log('Done');
            state.products.favorite = action.payload;
        },
        [getFavoriteProducts.rejected]: (state, action) => {
            console.log('Rejected');
        },
        //getOneProduct
        [getOneProduct.pending]: (state, action) => {
            console.log('Fetching one product from BE...');
        },
        [getOneProduct.fulfilled]: (state, action) => {
            console.log('Done');
            state.products.one = action.payload;
        },
        [getOneProduct.rejected]: (state, action) => {
            console.log('Rejected');
        },
        //filterProducts
        [filterProducts.pending]: (state, action) => {
            console.log('Fetching filter product from BE...');
        },
        [filterProducts.fulfilled]: (state, action) => {
            console.log('Done');
            state.products.filter = action.payload;
        },
        [filterProducts.rejected]: (state, action) => {
            console.log('Rejected');
        },
    },
});

//reducers
const productReducer = productSlice.reducer;
export default productReducer;

//selector
export const productSelector = (state) => state.productReducer.products;

//action
// export const {} = productSlice.actions;
