import { createSlice } from '@reduxjs/toolkit';
import { merchApi } from '../merch/MerchApi'

import Merch from "@/interfaces/Imerch";

let initialState:Merch[] = []

const merchSlice = createSlice({
    name: 'merch',
    initialState: initialState,
    reducers: {
        setMerch(state, action) {
            return action.payload;
        },
        updateMerch(state, action) {
            const { id, title } = action.payload;
            const merch = state.find((merch) => merch.id === id );
            if (merch) {
                merch.title = title;
            }
        },
    },
});

export const { setMerch, updateMerch } = merchSlice.actions;
export default merchSlice.reducer;
