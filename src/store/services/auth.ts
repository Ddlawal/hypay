import baseApi from '.'
import { TwoFAResponse, GeneratedTwoFASecret, LogoutResponse, UserAuth, GoogleLoginData } from '../../interfaces/auth'

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
        login: builder.mutation<UserAuth, { email: string; password: string }>({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data,
            }),
            transformResponse: (res: UserAuth) => res,
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
        loginWithGoogle: builder.mutation<UserAuth, GoogleLoginData>({
            query: (data) => ({
                url: '/login/loginFromSocial',
                method: 'POST',
                body: data,
            }),
            transformResponse: (res: UserAuth) => res,
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
        enableTwoFA: builder.query<TwoFAResponse, { code: string }>({
            query: (data) => ({
                url: '/2fa/enable2fa',
                method: 'POST',
                body: data,
            }),
            transformResponse: (res: TwoFAResponse) => res,
        }),
        disableTwoFA: builder.query<TwoFAResponse, { 'current-password': string }>({
            query: (data) => ({
                url: '/2fa/disable2fa',
                method: 'POST',
                body: data,
            }),
            transformResponse: (res: TwoFAResponse) => res,
        }),
        authenticateTwoFA: builder.query<TwoFAResponse, { code: string }>({
            query: (data) => ({
                url: '/2fa/authenticate',
                method: 'POST',
                body: data,
            }),
            transformResponse: (res: TwoFAResponse) => res,
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
    useLazyDisableTwoFAQuery,
    useLazyAuthenticateTwoFAQuery,
} = authApi
