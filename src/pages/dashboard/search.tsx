import { useRouter } from 'next/router'
import React from 'react'
import { Input } from '../../components/form'
import { PrimaryLayout } from '../../components/Layout'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useProducts } from '../../hooks/useProducts'
import { useSearch } from '../../hooks/useSearch'
import { ProductsType, SearchProductType } from '../../interfaces/products'
import { ProductList } from './products'

export type SearchType = 'product' | 'order'

const Search = () => {
    const isDesktop = useMediaQuery('md')
    const { query, replace } = useRouter()

    if (isDesktop) {
        replace('/dashboard/products')
    }

    const searchType = query.q as SearchType

    const {
        deleteProduct: { onDelete },
        searchProduct,
    } = useProducts()

    const { result, handleInputChange } = useSearch(searchProduct)

    return (
        <PrimaryLayout
            isNavBack
            header={
                <Input
                    placeholder="Search"
                    fullWidth
                    autoFocus
                    padding="px-1"
                    type="search"
                    onChange={handleInputChange}
                />
            }
        >
            <div className="py-4 md:px-8">
                <SearchList searchType={searchType} result={result} onDelete={onDelete} searchProduct={searchProduct} />
            </div>
        </PrimaryLayout>
    )
}

const SearchList = ({
    searchType,
    result,
    onDelete,
    searchProduct,
}: {
    searchType: SearchType
    result: ProductsType[]
    onDelete: (id: string, url: string) => Promise<void>
    searchProduct: SearchProductType
}) => {
    if (searchType === 'product') {
        if (result?.length === 0) {
            return <div className="mt-12 flex justify-center">Procurar Produtos</div>
        }

        return <ProductList products={result} onDelete={onDelete} searchProduct={searchProduct} />
    }
    return <div>Others</div>
}

export default Search
