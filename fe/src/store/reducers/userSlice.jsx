import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk('user/registerUser', async (user) => {
    try {
        const res = await axios.post('api/user/register', user);
        localStorage.setItem('accesstoken', res.data.accesstoken);
        return res.data;
    } catch (error) {
        alert(error.response.data.msg);
    }
});

export const loginUser = createAsyncThunk('user/loginUser', async (user) => {
    try {
        const res = await axios.post('api/user/login', user);
        localStorage.setItem('accesstoken', res.data.accesstoken);
        return res.data;
    } catch (error) {
        alert(error.response.data.msg);
    }
});

export const addCart = createAsyncThunk('user/addCart', async (payload) => {
    try {
        let apiRequest;
        if (payload.apiRequest === 'productDetail') {
            apiRequest = '../api/user/addcart';
        } else {
            apiRequest = '/api/user/addcart';
        }

        const res = await axios.put(apiRequest, payload.cart, {
            headers: { Authorization: payload.user.accesstoken },
        });
        return res.data;
    } catch (error) {
        alert(error.response.data.msg);
    }
});

export const userSlice = createSlice({
    name: 'user',
    initialState: { user: null },
    reducers: {
        logoutUser: (state, action) => {
            state.user = null;
            localStorage.removeItem('accesstoken');
        },
    },
    extraReducers: {
        //registerUser
        [registerUser.pending]: (state, action) => {
            console.log('Registering user from BE...');
        },
        [registerUser.fulfilled]: (state, action) => {
            console.log('Done');
            state.user = action.payload;
        },
        [registerUser.rejected]: (state, action) => {
            console.log('Rejected');
        },
        //loginUser
        [loginUser.pending]: (state, action) => {
            console.log('Logining user from BE...');
        },
        [loginUser.fulfilled]: (state, action) => {
            console.log('Done');
            state.user = action.payload;
        },
        [loginUser.rejected]: (state, action) => {
            console.log('Rejected');
        },
        //addCart
        [addCart.pending]: (state, action) => {
            console.log('Adding cart from BE...');
        },
        [addCart.fulfilled]: (state, action) => {
            console.log('Done');
            state.user.cart = action.payload;
        },
        [addCart.rejected]: (state, action) => {
            console.log('Rejected');
        },
    },
});

//reducers
const userReducer = userSlice.reducer;
export default userReducer;

//selector
export const userSelector = (state) => state.userReducer.user;

//action
export const { logoutUser } = userSlice.actions;
