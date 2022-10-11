import { useState, useEffect } from 'react'
import { ISingleTheme, IUserProfile } from '../interfaces/onlineStore'
import { showSuccessSnackbar, showErrorSnackbar } from '../lib/helper'
import { useFetchThemeQuery, useLazyGetProfileInfoQuery, useSetThemeMutation } from '../store/services/onlineStore'

function useTheme() {
    const { data: themeData, isLoading: loadingTheme } = useFetchThemeQuery('onlineTheme')
    const [profileInfo] = useLazyGetProfileInfoQuery()
    const [setThemeFunc, { isLoading: setThemeLoading }] = useSetThemeMutation()
    const [selectedTheme, setSelectedTheme] = useState<ISingleTheme | undefined>()

    useEffect(() => {
        async function getProfileInfo() {
            const resp: IUserProfile = await profileInfo().unwrap()
            setSelectedTheme(resp?.userProfile.theme)
        }
        getProfileInfo()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const updateTheme = async function (id: string) {
        try {
            const resp: ISingleTheme = await setThemeFunc({ theme_id: id }).unwrap()
            setSelectedTheme(resp)
            showSuccessSnackbar('Theme successfully set')
        } catch (err: any) {
            console.log(err.response, 'while trying to update theme')
            showErrorSnackbar('Something went wrong')
        }
    }

    return { loadingTheme, themeData, selectedTheme, updateTheme, setThemeLoading }
}

export default useTheme
