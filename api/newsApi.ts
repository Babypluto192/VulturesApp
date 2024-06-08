import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import News from "@/interfaces/INews";

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
        getNews: builder.query<News[], void>({
            query: () => 'news',
        }),
    }),
});

export const { useGetNewsQuery } = newsApi;
