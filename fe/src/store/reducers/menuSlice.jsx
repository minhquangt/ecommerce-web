import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
    name: 'menu',
    initialState: { isOpen: false },
    reducers: {
        toggleMenu: (state, action) => {
            state.isOpen = !state.isOpen;
        },
        closeMenu: (state, action) => {
            state.isOpen = false;
        },
    },
});

//reducers
const menuReducer = menuSlice.reducer;
export default menuReducer;

//selector
export const menuSelector = (state) => state.menuReducer;

//action
export const { toggleMenu, closeMenu } = menuSlice.actions;
