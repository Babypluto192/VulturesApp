import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {vultures1Api} from "@/components/VulturesAlbum1/Vultures1Api";
import {preVulturesApi} from "@/components/PreColab/LeaksApi";
import {badBookApi} from "@/components/BBPB1/BadPlayBookApi";
import {vultures2Api} from "@/components/Vultures2/Vultures2Api";
import {newsApi} from "./news/NewsApi"
import {merchApi} from "@/app/merch/MerchApi";
import {concertApi} from "@/app/concerts/ConcertApi";
import merchReducer from './admin/songsSlice';
export const store = configureStore({
        reducer: {
            [vultures1Api.reducerPath] : vultures1Api.reducer,
            [preVulturesApi.reducerPath]: preVulturesApi.reducer,
            [badBookApi.reducerPath]: badBookApi.reducer,
            [vultures2Api.reducerPath]: vultures2Api.reducer,
            [newsApi.reducerPath]: newsApi.reducer,
            [merchApi.reducerPath]: merchApi.reducer,
            [concertApi.reducerPath]: concertApi.reducer,
            merch: merchReducer,
        },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(vultures1Api.middleware).concat(preVulturesApi.middleware).concat(badBookApi.middleware).concat(vultures2Api.middleware).concat(newsApi.middleware).concat(merchApi.middleware).concat(concertApi.middleware)
    }
)
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch