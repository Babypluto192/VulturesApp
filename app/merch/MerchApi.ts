import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Merch from "@/interfaces/Imerch";

export const merchApi = createApi({
    reducerPath: 'merchApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
        getMerch: builder.query<Merch[], void>({
            query: () => 'merch',
        }),
    }),
});

export const { useGetMerchQuery } = merchApi;
