import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Track } from '@/interfaces/Itrack';

export const badBookApi = createApi({
    reducerPath: 'badBookAPi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
        getLeaksBadBook: builder.query<Track[], void>({
            query: () => 'badbook',
        }),
    }),
});

export const { useGetLeaksBadBookQuery } = badBookApi;
