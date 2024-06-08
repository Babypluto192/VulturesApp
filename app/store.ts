import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {vultures1Api} from "@/api/vultures1Api";
import {preVulturesApi} from "@/api/leaksApi";
import {badBookApi} from "@/api/badPlayBookApi";
import {vultures2Api} from "@/api/vultures2Api";
import {newsApi} from "@/api/newsApi"
import {merchApi} from "@/api/merchApi";
import {concertApi} from "@/api/concertApi";
import merchReducer from '@/slices/merchSlice';
import newsReducer from '@/slices/newsSlice';
import requestReducer from "@/slices/requestSlice"
import concertSlice from "@/slices/concertSlice";

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
            request: requestReducer,
            news: newsReducer,
            concert: concertSlice,
        },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(vultures1Api.middleware).concat(preVulturesApi.middleware).concat(badBookApi.middleware).concat(vultures2Api.middleware).concat(newsApi.middleware).concat(merchApi.middleware).concat(concertApi.middleware)
    }
)
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch