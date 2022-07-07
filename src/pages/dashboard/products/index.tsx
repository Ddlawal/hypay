import React, { Dispatch, useRef, useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { PrimaryLayout } from '../../../components/Layout'
import { Button } from '../../../components/Button'
import { CircularPlusIcon } from '../../../components/Icons/CircularPlusIcon'
import { Table } from '../../../components/Table'
import { ImportIcon, MenuIcon } from '../../../components/Icons'
import { SelectField } from '../../../components/Select'
import { useProducts } from '../../../hooks/useProducts'
import { Card } from '../../../components/Card'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { NextLink } from '../../../components/Links'
import { ProductsType, SearchProductType } from '../../../interfaces/products'
import { copyTextToClipboard } from '../../../lib/helper'
import { useSnackbar } from '../../../hooks/useSnackbar'
import { useSearch } from '../../../hooks/useSearch'

const productActionSelectItems = [
    {
        label: 'Apagar',
        value: 'Apagar',
    },
    {
        label: 'Ativar na loja',
        value: 'Ativar na loja',
    },
    {
        label: 'Desativar na loja',
        value: 'Desativar na loja',
    },
    {
        label: 'Alterar preço',
        value: 'Alterar preço',
    },
]

const NoProducts = ({ gotoAddProducts }: { gotoAddProducts: () => void }) => {
    return (
        <div className="flex h-[80vh] flex-col items-center justify-center  py-4 px-10 leading-5 md:h-full md:items-start md:px-16 lg:px-36">
            <div className="mb-2 text-center md:text-left">Você ainda não tem produtos cadastrados na sua loja.</div>
            <div>Vamos começar a vender?</div>
            <Button primary className="mt-8 flex items-center md:mt-2" onClick={gotoAddProducts}>
                <span className="pl-2">
                    <CircularPlusIcon />
                </span>
                <span className="px-2">Adicione seu primeiro produto</span>
            </Button>
        </div>
    )
}

const ProductsHeader = ({ isDesktop, gotoAddProducts }: { isDesktop: boolean; gotoAddProducts: () => void }) => {
    return (
        <div className="flex items-center justify-between">
            <div className="p-4 text-lg font-bold text-hypay-black md:p-0">Produtos cadastrados</div>
            {isDesktop ? (
                <div className="flex items-center gap-x-6">
                    <div className="flex items-center  gap-x-3">
                        <MenuIcon /> <span>Product orders</span>
                    </div>
                    <div className="flex items-center  gap-x-3">
                        <ImportIcon /> <span>Export and Import CSV</span>
                    </div>
                    <Button primary className="flex items-center" onClick={gotoAddProducts}>
                        <span className="pl-2">
                            <CircularPlusIcon />
                        </span>
                        <span className="px-2">Adicionar produto</span>
                    </Button>
                </div>
            ) : (
                <div className="pr-4">
                    <Button primary padding="py-1.5 px-4" className="block md:hidden" onClick={gotoAddProducts}>
                        <CircularPlusIcon />
                    </Button>
                </div>
            )}
        </div>
    )
}

export const ProductList = ({
    products,
    onDelete,
    searchProduct,
    setIds,
}: {
    products: ProductsType[]
    onDelete: (id: string, url: string) => Promise<void>
    searchProduct: SearchProductType
    setIds: Dispatch<React.SetStateAction<string[]>>
}) => {
    const isDesktop = useMediaQuery('md')
    const { push } = useRouter()

    const itemRefs = useRef({})
    const [productId, setProductId] = useState<string>('')
    const { showSuccessSnackbar } = useSnackbar()
    const gotoEditProduct = () => push(`/dashboard/products/editProduct/${productId}`)

    const host = window.location.origin

    const copyProductLink = (id: string) => {
        copyTextToClipboard(`${host}/store/products/${id}`)
        showSuccessSnackbar('Link copied')
    }

    const deleteProduct = async () => {
        const { data } = await searchProduct(productId)
        const productName = data && data[0] ? data[0].productName : 'this product'
        const proceed = confirm(`Are you sure you want to delete ${productName}`)
        if (proceed) {
            onDelete(productId, '/dashboard/products')
        }
    }

    const onSelect = (id: string, isChecked: boolean) => {
        if (isChecked) {
            return setIds((prev) => [...prev, id])
        }

        setIds((prev) => prev.filter((i) => i !== id))
    }

    const onSelectAll = (ids: Array<string>, isChecked: boolean) => {
        if (isChecked) {
            return setIds(ids)
        }

        setIds([])
    }

    return (
        <>
            {isDesktop ? (
                <Table<ProductsType>
                    uniqueKey="id"
                    refs={itemRefs}
                    setId={setProductId}
                    onSelect={onSelect}
                    onSelectAll={onSelectAll}
                    headers={['', 'Product', 'Inventory', 'Price', 'Discount', 'Variants', 'Actions']}
                    keys={['image_url', 'productName', 'quantity', 'amount', null, null, null]}
                    rows={products}
                    selectable
                >
                    <div className="flex flex-col items-start text-[11px] leading-4 text-hypay-pink">
                        <button className="hover:font-bold" onClick={() => copyProductLink(productId)}>
                            Copy link
                        </button>
                        <button className="hover:font-bold" onClick={gotoEditProduct}>
                            Edit
                        </button>
                        <button className="hover:font-bold" onClick={deleteProduct}>
                            Delete
                        </button>
                    </div>
                </Table>
            ) : (
                <div className="mx-4 grid grid-cols-2 gap-y-2 gap-x-4">
                    {products.map(({ id, productName, image_url }) => {
                        return (
                            <NextLink href={`/dashboard/products/${id}`} key={id}>
                                <Card rounded padding="p-3">
                                    <div className="relative h-36 w-full rounded-lg border border-gray-100 sm:h-48">
                                        <Image src={image_url} layout="fill" objectFit="cover" />
                                    </div>
                                    <div>{productName}</div>
                                </Card>
                            </NextLink>
                        )
                    })}
                </div>
            )}
        </>
    )
}

const Products: NextPage = () => {
    const [action, setAction] = useState<string | null>(null)
    const [ids, setIds] = useState<Array<string>>([])
    const isDesktop = useMediaQuery('md')
    const {
        products,
        isLoading,
        deleteProduct: { onDelete, onDeleteMany },
        searchProduct,
    } = useProducts()

    const { result: searchableProducts, handleInputChange } = useSearch(searchProduct, products)
    const { push } = useRouter()

    const gotoAddProducts = () => push('/dashboard/products/addProducts')

    if (searchableProducts?.length === 0) {
        return (
            <PrimaryLayout currentTabIndex={1} isLoading={isLoading}>
                <NoProducts gotoAddProducts={gotoAddProducts} />
            </PrimaryLayout>
        )
    }

    const handleSelectAction = async (action: string | null) => {
        setAction(action)

        if (action === 'Apagar') {
            const proceed = confirm(
                `Are you sure you want to delete these ${ids.length} ${ids.length > 1 ? 'products' : 'product'}`
            )
            if (proceed) {
                await onDeleteMany(ids)
                setAction(null)
                setIds([])
            }
        }
    }

    return (
        <PrimaryLayout
            currentTabIndex={1}
            isLoading={isLoading}
            isNavBack={!isDesktop}
            navHeader="Produtos"
            searchable="product"
            desktopSearch={handleInputChange}
        >
            <div className="py-4 md:px-8">
                <ProductsHeader isDesktop={isDesktop} gotoAddProducts={gotoAddProducts} />

                {isDesktop ? (
                    <>
                        <div className="mb-3 w-[40%]">
                            <SelectField<string | null>
                                options={productActionSelectItems}
                                name="product-list-actions"
                                label="Ações"
                                value={action}
                                placeholder={<span className="text-hypay-primary">Selecionar Ação...</span>}
                                onChange={handleSelectAction}
                                isDisabled={ids.length < 1}
                            />
                        </div>
                    </>
                ) : null}
                <ProductList
                    setIds={setIds}
                    products={searchableProducts}
                    onDelete={onDelete}
                    searchProduct={searchProduct}
                />
            </div>
        </PrimaryLayout>
    )
}

export default Products
