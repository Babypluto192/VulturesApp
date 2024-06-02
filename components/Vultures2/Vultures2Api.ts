import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Track } from '@/interfaces/Itrack';

export const vultures2Api = createApi({
    reducerPath: 'vultures2APi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
        getLeaksVultures2: builder.query<Track[], void>({
            query: () => 'vultures2',
        }),
    }),
});

export const { useGetLeaksVultures2Query } = vultures2Api;
