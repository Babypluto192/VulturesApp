import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Track } from '@/interfaces/Itrack';

export const preVulturesApi = createApi({
    reducerPath: 'preVulturesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
        getLeaks: builder.query<Track[], void>({
            query: () => 'prevultures',
        }),
    }),
});

export const { useGetLeaksQuery } = preVulturesApi;
