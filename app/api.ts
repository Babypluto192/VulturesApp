import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Track } from './Itrack';

export const songsApi = createApi({
    reducerPath: 'songsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
        getTracks: builder.query<Track[], void>({
            query: () => 'tracks',
        }),
    }),
});

export const { useGetTracksQuery } = songsApi;
