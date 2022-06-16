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
        logout: builder.mutation({
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
        loginWithGoogle: builder.mutation({
            query: (data: any) => ({
                url: '/login/loginFromSocial',
                method: 'POST',
                body: data,
            }),
        }),
        verifyEmail: builder.query({
            query: () => ({
                url: '/email/resend',
                method: 'GET',
            }),
        }),
    }),
})

export const {
    useRegistrationMutation,
    useLoginMutation,
    useLogoutMutation,
    useCreateBusinessNameMutation,
    useLoginWithGoogleMutation,
    useLazyVerifyEmailQuery,
} = authApi
