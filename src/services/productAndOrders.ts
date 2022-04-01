import baseApi from '.'
import { ProductsType } from '../interfaces/products'

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addAProduct: builder.mutation({
            query: (data: ProductsType) => ({
                url: '/product/add',
                method: 'POST',
                body: data,
            }),
        }),
        getAllProducts: builder.query<ProductsType, void>({
            query: () => ({
                url: '/myProducts',
                method: 'GET',
            }),
        }),
    }),
})

export const { useAddAProductMutation, useGetAllProductsQuery } = productApi
