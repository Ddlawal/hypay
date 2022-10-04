import base from '.'
import { ICoupon, ICouponResponse, ICreateCoupon, IGenerateCoupon, IUpdateCoupon } from '../../interfaces/coupons'

const couponApi = base.injectEndpoints({
    endpoints: (builder) => ({
        fetchMyCoupons: builder.query<ICouponResponse, void>({
            query: () => ({
                url: '/myCoupons',
                method: 'GET',
                transformResponse: (res: { data: { coupons: ICoupon } }) => res.data.coupons,
            }),
        }),

        addCoupon: builder.mutation({
            query: (couponDetails: ICreateCoupon) => ({
                url: '/coupon/add',
                method: 'POST',
                body: couponDetails,
                transformResponse: (res: { data: { coupons: ICoupon } }) => res.data.coupons,
            }),
        }),
        updateCoupon: builder.mutation({
            query: (couponDetails: IUpdateCoupon) => {
                return {
                    url: '/coupon/update',
                    method: 'POST',
                    body: couponDetails,
                    transformResponse: (res: { data: { coupons: ICoupon } }) => res.data.coupons,
                }
            },
        }),

        activateCoupon: builder.mutation({
            query: (couponID: { couponID: number }) => ({
                url: `/coupon/activate`,
                method: 'POST',
                body: couponID,
                transformResponse: (res: { data: { coupons: ICoupon } }) => res.data.coupons,
            }),
        }),
        deActivateCoupon: builder.mutation({
            query: (couponID: { couponID: number }) => ({
                url: `/coupon/deactivate`,
                method: 'POST',
                body: couponID,
            }),
        }),
        applyCoupon: builder.query({
            query: (coupon_code: number) => ({
                url: `/coupon/apply`,
                method: 'POST',
                body: { coupon_code },
            }),
        }),
        generateCoupon: builder.query({
            query: (generateCouponPayload: IGenerateCoupon) => {
                return {
                    url: '/coupon/generate',
                    method: 'GET',
                    generateCouponPayload,
                    transformResponse: (res: { data: { coupons: ICoupon } }) => res.data.coupons,
                }
            },
        }),
        removeCoupon: builder.query({
            query: (couponID: number) => {
                return {
                    url: `/coupon/remove?couponID=${couponID}`,
                    method: 'GET',
                    transformResponse: (res: { data: { coupons: ICoupon } }) => res.data.coupons,
                }
            },
        }),
        getReferralLevels: builder.query({
            query: () => {
                return {
                    url: `/userAccount/getReferralLevels`,
                    method: 'GET',
                    // transformResponse: (res: { data: { coupons: ICoupon } }) => res.data.coupons,
                }
            },
        }),
        getReferralStats: builder.query({
            query: () => {
                return {
                    url: `/userAccount/getReferralStats`,
                    method: 'GET',
                    // transformResponse: (res: { data: { coupons: ICoupon } }) => res.data.coupons,
                }
            },
        }),
    }),
    overrideExisting: true,
})

export const {
    useLazyFetchMyCouponsQuery,
    useAddCouponMutation,
    useLazyRemoveCouponQuery,
    useLazyGenerateCouponQuery,
    useActivateCouponMutation,
    useDeActivateCouponMutation,
    useUpdateCouponMutation,
    useGetReferralLevelsQuery,
    useGetReferralStatsQuery,
} = couponApi
