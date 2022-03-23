import baseApi from '.'

const authApi = baseApi.injectEndpoints({
    endpoints: (builder: any) => ({
        miniRegistration: builder.mutation({
            query: (data: any) => ({
                url: '/register/minimal',
                method: 'POST',
                body: data,
                headers: {
                    'Sec-Fetch-Mode': 'no-cors',
                },
            }),
        }),
    }),
})

export const { useMiniRegistrationMutation } = authApi
