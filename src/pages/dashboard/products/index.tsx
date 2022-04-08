import React, { useState } from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../components/Layout'
import { Button } from '../../../components/Button'
import { CircularPlusIcon } from '../../../components/Icons/CircularPlusIcon'
import { Table } from '../../../components/Table'
import { ImportIcon, MenuIcon } from '../../../components/Icons'
import { useRouter } from 'next/router'
import { SelectField } from '../../../components/Select'
import { useProducts } from '../../../hooks/useProducts'
import { Card } from '../../../components/Card'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import Image from 'next/image'
import { NextLink } from '../../../components/Links'
import { ProductsType } from '../../../interfaces/products'

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
            ) : null}
        </div>
    )
}

const Products: NextPage = () => {
    const [action, setAction] = useState<string | null>(null)
    const [productId, setProductId] = useState<string | null>(null)
    const isDesktop = useMediaQuery('md')
    const {
        products,
        deleteProduct: { onDelete },
    } = useProducts(productId as string)
    const { push } = useRouter()

    const gotoAddProducts = () => push('/dashboard/products/addProduxts')
    const gotoEditProduct = () => push(`/dashboard/products/editProduct/${productId}`)

    const deleteProduct = () => onDelete('/dashboard/products')

    if (products?.length === 0) {
        return (
            <PrimaryLayout currentTabIndex={1}>
                <NoProducts gotoAddProducts={gotoAddProducts} />
            </PrimaryLayout>
        )
    }

    return (
        <PrimaryLayout currentTabIndex={1}>
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
                                onChange={(v) => setAction(v)}
                            />
                        </div>
                    </>
                ) : null}
                {isDesktop ? (
                    <Table<ProductsType>
                        uniqueKey="id"
                        setId={setProductId}
                        headers={['Product', 'Inventory', 'Price', 'Discount', 'Variants', 'Actions']}
                        keys={['productName', 'quantity', 'amount', null, null, null]}
                        rows={products}
                    >
                        <div className="flex flex-col items-start text-[11px] leading-4 text-hypay-pink">
                            <button className="hover:font-bold">Copy link</button>
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
            </div>
        </PrimaryLayout>
    )
}

export default Products
