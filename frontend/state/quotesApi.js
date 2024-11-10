import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const quotesApi = createApi({
    reducerPath: 'quotesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9009/api/' }),
    tagTypes: ['Quotes'],
    endpoints: builder => ({
        getQuotes: builder.query({
            query: () => 'quotes',
            providesTags: ['Quotes'],
        }),
        createQuote: builder.mutation({
            query: quote => ({
                url: 'quotes',
                method: 'POST',
                body: quote
            }),
            invalidatesTags: ['Quotes'],
        }),
        toggleQuote: builder.mutation({

        }),
        deleteQuote: builder.mutation({

        })
    })
})

export const {
    useGetQuotesQuery, useToggleFakeMutation, useCreateQuoteMutation, useDeleteQuoteMutation,
} = quotesApi
