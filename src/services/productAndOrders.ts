import baseApi from '.'

const productApi = baseApi.injectEndpoints({
    endpoints: (builder: any) => ({
        addAProduct: builder.mutation({
            query: (data: any) => ({
                url: '/product/add',
                method: 'POST',
                body: data,
            }),
        }),
        getAllProducts: builder.mutation({
            query: () => ({
                url: '/myProducts',
                method: 'GET',
            }),
        }),
    }),
})

export const { useAddAProductMutation, useGetAllProductsMutation } = productApi
