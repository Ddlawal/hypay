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
        getAllProducts: builder.query<ProductsType[], void>({
            query: () => ({
                url: '/myProducts',
                method: 'GET',
            }),
            transformResponse: (res: { products: { data: ProductsType[] } }) => res.products.data,
        }),
        deleteAProduct: builder.query<{ products: { data: ProductsType[] } }, string>({
            query: (id: string) => ({
                url: `/product/remove?productID=${id}`,
                method: 'GET',
            }),
        }),
        createStore: builder.mutation<{ businessName: string }, string>({
            query: (businessName: string) => ({
                url: '/createStore',
                method: 'POST',
                body: { businessName },
            }),
        }),
        searchMerchantProducts: builder.query<ProductsType[], string>({
            query: (id: string) => ({
                url: `/search/products?query=${id}`,
                method: 'GET',
            }),
            transformResponse: (res: { products: { data: ProductsType[] } }) => res.products.data,
        }),
    }),
})

export const {
    useAddAProductMutation,
    useEditProductMutation,
    useGetAllProductsQuery,
    useLazyDeleteAProductQuery,
    useCreateStoreMutation,
    useSearchMerchantProductsQuery,
    useLazyGetAllProductsQuery,
    useLazySearchMerchantProductsQuery,
} = productApi
