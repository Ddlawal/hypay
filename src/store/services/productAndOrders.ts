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
    }),
})

export const { useAddAProductMutation, useGetAllProductsQuery } = productApi
