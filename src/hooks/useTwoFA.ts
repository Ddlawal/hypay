import {
    useLazyAuthenticateTwoFAQuery,
    useLazyDisableTwoFAQuery,
    useLazyEnableTwoFAQuery,
    useLazyGenerateSecretQuery,
} from '../store/services/auth'

export const useTwoFA = () => {
    const [generateSecret, { isFetching, isLoading }] = useLazyGenerateSecretQuery({
        refetchOnFocus: false,
        refetchOnReconnect: false,
    })
    const [enableTwoFA, { isFetching: isEnableFetching, isLoading: isEnableLoading }] = useLazyEnableTwoFAQuery({
        refetchOnFocus: false,
        refetchOnReconnect: false,
    })
    const [disableTwoFA, { isFetching: isDisableFetching, isLoading: isDisableLoading }] = useLazyDisableTwoFAQuery({
        refetchOnFocus: false,
        refetchOnReconnect: false,
    })
    const [authenticateTwoFA, { isFetching: isAuthFetching, isLoading: isAuthLoading }] = useLazyAuthenticateTwoFAQuery(
        {
            refetchOnFocus: false,
            refetchOnReconnect: false,
        }
    )

    return {
        generateSecret,
        isLoading: isFetching || isLoading,
        enableTwoFA,
        isEnabling: isEnableFetching || isEnableLoading,
        disableTwoFA,
        isDisabling: isDisableFetching || isDisableLoading,
        authenticateTwoFA,
        isAuthenticating: isAuthFetching || isAuthLoading,
    }
}
