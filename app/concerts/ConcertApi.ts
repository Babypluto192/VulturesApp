import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Concert from "@/interfaces/IConcert";

export const concertApi = createApi({
    reducerPath: 'concertApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
        getConcerts: builder.query<Concert[], void>({
            query: () => 'concert',
        }),
    }),
});

export const { useGetConcertsQuery } = concertApi;
