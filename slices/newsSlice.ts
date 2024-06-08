import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import News from "@/interfaces/INews";

const merchAdapter = createEntityAdapter<News>();

const initialState = merchAdapter.getInitialState();






const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNews: merchAdapter.setAll,
        updateNews: merchAdapter.updateOne,
        deleteNews: merchAdapter.removeOne,
    },
});


export const { setNews, updateNews, deleteNews } = newsSlice.actions;


export default newsSlice.reducer;



export const {
    selectAll: selectAllNewsItems,
    // @ts-ignore
} = merchAdapter.getSelectors((state: RootState) => state.news);
