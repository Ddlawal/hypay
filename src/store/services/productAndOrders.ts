import baseApi from '.'
import { ProductsType } from '../../interfaces/products'

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addAProduct: builder.mutation({
            query: (data: FormData) => ({
                url: '/product/add',
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
        createStore: builder.mutation<{ businessName: string }, any>({
            query: (businessName: string) => ({
                url: '/createStore',
                method: 'POST',
                body: { businessName },
            }),
        }),
    }),
})

export const { useAddAProductMutation, useGetAllProductsQuery, useCreateStoreMutation } = productApi
