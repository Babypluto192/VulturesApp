import {createSlice, PayloadAction} from "@reduxjs/toolkit";
interface RequestSliceState {
    loading: boolean;
}

const initialState: RequestSliceState = {
    loading: false,
};
const requestSlice = createSlice({
    name: 'merch',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    }
});


export const { setLoading } = requestSlice.actions;
export default requestSlice.reducer;