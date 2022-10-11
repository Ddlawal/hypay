import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '.'
import {
    AddBuyerAddressType,
    BuyerAddress,
    PlaceOrderArg,
    PlaceOrderResponse,
    ShippingRates,
    ShippingRatesQueryArg,
} from '../../interfaces/buyer'

export const buyerApi = createApi({
    tagTypes: ['get', 'ship'],
    reducerPath: 'buyerApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        addBuyerAddress: builder.mutation<Array<BuyerAddress>, AddBuyerAddressType>({
            query: (data: AddBuyerAddressType) => ({
                url: '/order/buyerAddress/add',
                method: 'POST',
                body: data,
            }),
            transformResponse: (res: { addresses: Array<BuyerAddress> }) => res.addresses,
        }),
        getBuyerAddresses: builder.query<Array<BuyerAddress> | undefined, void>({
            query: () => ({
                url: '/order/buyerAddress',
                method: 'GET',
            }),
            providesTags: ['get'],
            transformResponse: (res: { addresses: Array<BuyerAddress> }) => res.addresses,
        }),
        getShipmentRates: builder.query<Array<ShippingRates> | undefined, ShippingRatesQueryArg>({
            query: ({ addressId, cartId }: ShippingRatesQueryArg) => ({
                url: `/order/getShipmentRates?cart_id=${cartId}&address_id=${addressId}`,
                method: 'GET',
            }),
            transformResponse: (res: { rates: Array<ShippingRates> }) => res.rates.filter((rate) => !!rate.courier),
        }),
        placeOrder: builder.mutation<PlaceOrderResponse, PlaceOrderArg>({
            query: (body: PlaceOrderArg) => ({
                url: '/order/placeOrder',
                method: 'POST',
                body,
            }),
            transformResponse: (res: PlaceOrderResponse) => res,
        }),
    }),
})

export const {
    useAddBuyerAddressMutation,
    useLazyGetBuyerAddressesQuery,
    useLazyGetShipmentRatesQuery,
    usePlaceOrderMutation,
} = buyerApi
