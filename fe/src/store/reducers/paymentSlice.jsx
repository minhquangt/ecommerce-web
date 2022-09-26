import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosNormal from 'api/axiosNormal';

export const getHistory = createAsyncThunk('payment/getHistory', async (user) => {
    try {
        const res = await axiosNormal.get('/api/user/history', {
            headers: { Authorization: user.accesstoken },
        });
        return res.data;
    } catch (error) {
        alert(error.response.data.msg);
    }
});

export const paymentSlice = createSlice({
    name: 'payment',
    initialState: { payment: { all: [], history: [] } },
    extraReducers: {
        //getHistory
        [getHistory.pending]: (state, action) => {
            console.log('Fetching payments history from BE...');
        },
        [getHistory.fulfilled]: (state, action) => {
            console.log('Done');
            state.payment.history = action.payload;
        },
        [getHistory.rejected]: (state, action) => {
            console.log('Rejected');
        },
    },
});

//reducers
const paymentReducer = paymentSlice.reducer;
export default paymentReducer;

//selector
export const paymentSelector = (state) => state.paymentReducer.payment;
