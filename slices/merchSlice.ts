import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import Merch from '@/interfaces/Imerch';
import { RootState } from '@/app/store';

const merchAdapter = createEntityAdapter<Merch>();

const initialState = merchAdapter.getInitialState();






const merchSlice = createSlice({
    name: 'merch',
    initialState,
    reducers: {
        setMerch: merchAdapter.setAll,
        updateMerch: merchAdapter.updateOne,
        deleteMerch: merchAdapter.removeOne,
    },
});


export const { updateMerch, deleteMerch, setMerch } = merchSlice.actions;


export default merchSlice.reducer;



export const {
    selectAll: selectAllMerchItems,
    // @ts-ignore
} = merchAdapter.getSelectors((state: RootState) => state.merch);
