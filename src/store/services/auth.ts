import baseApi from '.'
import { EnableTwoFAResponce, GeneratedTwoFASecret, LogoutResponse } from '../../interfaces/auth'

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
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
        logout: builder.mutation<LogoutResponse, { token: string }>({
            query: (token) => ({
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
        generateSecret: builder.query<GeneratedTwoFASecret, void>({
            query: () => ({
                url: '/2fa/generateSecret',
                method: 'POST',
            }),
            transformResponse: (res: { data: GeneratedTwoFASecret }) => res.data,
        }),
        enableTwoFA: builder.query<EnableTwoFAResponce, { code: string }>({
            query: (data) => ({
                url: '/2fa/enable2fa',
                method: 'POST',
                body: data,
            }),
            transformResponse: (res: EnableTwoFAResponce) => res,
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
    useLazyGenerateSecretQuery,
    useLazyEnableTwoFAQuery,
} = authApi
