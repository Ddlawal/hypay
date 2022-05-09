import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { ProductsType, SearchProductType } from '../interfaces/products'
import { debounce } from '../lib/helper'

export const useSearch = (search: SearchProductType, initialValue?: ProductsType[]) => {
    const [result, setResult] = useState<ProductsType[]>(initialValue ? initialValue : [])
    const [searchString, setSearchString] = useState('')

    const handleInputChange = debounce<ChangeEvent<HTMLInputElement>>((event: ChangeEvent<HTMLInputElement>) =>
        setSearchString(event.target.value)
    )

    const updateSearchResult = useCallback(() => {
        ;(async () => {
            if (initialValue && !initialValue.length) {
                return
            }

            if (!searchString) {
                return setResult(initialValue || [])
            }
            const { data } = await search(searchString)

            setResult(data || [])
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialValue, searchString])

    useEffect(updateSearchResult, [updateSearchResult])

    return { result, handleInputChange }
}
