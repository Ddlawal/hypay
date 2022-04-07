// import baseApi from '.'
import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '.'
import { ProductsType } from '../../interfaces/products'

export const productApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        addAProduct: builder.mutation({
            query: (data: FormData) => ({
                url: '/product/add',
                method: 'POST',
                body: data,
            }),
        }),
        editProduct: builder.mutation({
            query: (data: FormData) => ({
                url: '/product/update',
                method: 'POST',
                body: data,
            }),
        }),
        getAllProducts: builder.query<{ products: { data: ProductsType[] } }, void>({
            query: () => ({
                url: '/myProducts',
                method: 'GET',
            }),
        }),
        deleteAProduct: builder.query<{ products: { data: ProductsType[] } }, number>({
            query: (id: number) => ({
                url: `/product/remove?productID=${id}`,
                method: 'GET',
            }),
        }),
        createStore: builder.mutation<{ businessName: string }, any>({
            query: (businessName: string) => ({
                url: '/createStore',
                method: 'POST',
                body: { businessName },
            }),
        }),
    }),
})

export const {
    useAddAProductMutation,
    useEditProductMutation,
    useGetAllProductsQuery,
    useLazyDeleteAProductQuery,
    useCreateStoreMutation,
} = productApi
