import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {songsApi} from "@/app/api";

export const store = configureStore({
        reducer: {
            [songsApi.reducerPath] : songsApi.reducer
        },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(songsApi.middleware),
    }
)
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch