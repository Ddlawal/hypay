import baseApi from '.'

const authApi = baseApi.injectEndpoints({
    endpoints: (builder: any) => ({
        registration: builder.mutation({
            query: (data: any) => ({
                url: '/register',
                method: 'POST',
                body: {
                    ...data,
                    accountType: 'Merchant',
                    referral_code: '',
                },
            }),
        }),
        login: builder.mutation({
            query: (data: any) => ({
                url: '/login',
                method: 'POST',
                body: data,
            }),
        }),
        logout: builder.query({
            query: (token: string) => ({
                url: '/logout',
                method: 'POST',
                body: token,
            }),
        }),
        createBusinessName: builder.mutation({
            query: (data: any) => ({
                url: '/userAccount/modifyProfileInfo',
                method: 'POST',
                body: data,
            }),
        }),
    }),
})

export const { useRegistrationMutation, useLoginMutation, useLogoutQuery, useCreateBusinessNameMutation } = authApi
