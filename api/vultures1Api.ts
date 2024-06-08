import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Track } from '@/interfaces/Itrack';

export const vultures1Api = createApi({
    reducerPath: 'vultures1Api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
        getTracks: builder.query<Track[], void>({
            query: () => 'vultures1',
        }),
    }),
});

export const { useGetTracksQuery } = vultures1Api;
