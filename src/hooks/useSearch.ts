import { ChangeEvent, useEffect, useState } from 'react'
import { ProductsType, SearchProductType } from '../interfaces/products'
import { debounce } from '../lib/helper'

export const useSearch = (search: SearchProductType, intialValue: ProductsType[] = []) => {
    const [result, setResult] = useState<ProductsType[]>(intialValue)
    const [searchString, setSearchString] = useState('')

    const handleInputChange = debounce<ChangeEvent<HTMLInputElement>>((event: ChangeEvent<HTMLInputElement>) =>
        setSearchString(event.target.value)
    )

    useEffect(() => {
        ;(async () => {
            if (!searchString) {
                return setResult(intialValue)
            }

            const { data } = await search(searchString)

            setResult(data || [])
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchString, search])

    return { result, handleInputChange }
}
