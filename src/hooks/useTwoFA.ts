import { useEffect, useState } from 'react'

import { GeneratedTwoFASecret } from '../interfaces/auth'
import { useLazyEnableTwoFAQuery, useLazyGenerateSecretQuery } from '../store/services/auth'

export const useTwoFA = () => {
    const [generateSecret, { isFetching, isLoading }] = useLazyGenerateSecretQuery({
        refetchOnFocus: false,
        refetchOnReconnect: false,
    })
    const [enableTwoFA, { isFetching: isEnableFetching, isLoading: isEnableLoading }] = useLazyEnableTwoFAQuery({
        refetchOnFocus: false,
        refetchOnReconnect: false,
    })
    const [generatedTwoFASecret, setGeneratedTwoFASecret] = useState<GeneratedTwoFASecret>()

    useEffect(() => {
        const fetchData = async () => {
            const res = await generateSecret().unwrap()

            setGeneratedTwoFASecret(res)
        }

        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        generatedTwoFASecret,
        isLoading: isFetching || isLoading,
        enableTwoFA,
        isEnabling: isEnableFetching || isEnableLoading,
    }
}
