import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '.'
import { IproductCategory, ProductsType } from '../../interfaces/products'

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
        getAllProducts: builder.query<Array<ProductsType>, void>({
            query: () => ({
                url: '/myProducts',
                method: 'GET',
            }),
            transformResponse: (res: { products: { data: Array<ProductsType> } }) => res.products.data,
        }),
        getSingleProduct: builder.query<ProductsType, string>({
            query: (data: string) => ({
                url: `/product/single/${data}`,
                method: 'GET',
            }),
            transformResponse: (res: { product: ProductsType }) => res.product,
        }),
        deleteAProduct: builder.query<{ products: { data: Array<ProductsType> } }, string>({
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
        searchMerchantProducts: builder.query<Array<ProductsType>, string>({
            query: (id: string) => ({
                url: `/search/products?query=${id}`,
                method: 'GET',
            }),
            transformResponse: (res: { products: { data: Array<ProductsType> } }) => res.products.data,
        }),
        getProductDetails: builder.query<IproductCategory, string>({
            query: () => ({
                url: '/getCategories',
                method: 'GET',
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
    useSearchMerchantProductsQuery,
    useLazyGetAllProductsQuery,
    useLazySearchMerchantProductsQuery,
    useGetProductDetailsQuery,
    useLazyGetSingleProductQuery,
} = productApi
