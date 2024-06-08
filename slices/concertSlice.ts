import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import Concert from "@/interfaces/IConcert";

const merchAdapter = createEntityAdapter<Concert>();

const initialState = merchAdapter.getInitialState();






const concertSlice = createSlice({
    name: 'concert',
    initialState,
    reducers: {
        setConcert: merchAdapter.setAll,
        updateConcert: merchAdapter.updateOne,
        deleteConcert: merchAdapter.removeOne,
    },
});


export const { setConcert, updateConcert, deleteConcert } = concertSlice.actions;


export default concertSlice.reducer;



export const {
    selectAll: selectAllConcertItems,
    // @ts-ignore
} = merchAdapter.getSelectors((state: RootState) => state.concert);
