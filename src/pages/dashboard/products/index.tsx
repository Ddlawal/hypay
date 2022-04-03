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

const NoProducts = () => {
    return (
        <div className="py-4 px-4 leading-5 md:px-16 lg:px-36">
            <div>Você ainda não tem produtos cadastrados na sua loja.</div>
            <div>Vamos começar a vender?</div>
            <Button primary className="mt-2 flex items-center">
                <span className="pl-2">
                    <CircularPlusIcon />
                </span>
                <span className="px-2">Adicione seu primeiro produto</span>
            </Button>
        </div>
    )
}

const Products: NextPage = () => {
    const [action, setAction] = useState<string | null>(null)
    const { push } = useRouter()
    const { products } = useProducts()

    const gotoAddProducts = () => push('/dashboard/products/addProduxts')

    if (products?.length === 0) {
        return (
            <PrimaryLayout currentTabIndex={1}>
                <NoProducts />
            </PrimaryLayout>
        )
    }
    return (
        <PrimaryLayout currentTabIndex={1}>
            <div className="py-4 md:px-8">
                <div className="flex items-center justify-between">
                    <div className="font-bold text-hypay-black">Products</div>
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
                </div>
                <div className="pt-6 pb-4">Ações</div>
                <div className="mb-3 w-[40%]">
                    <SelectField<string | null>
                        options={productActionSelectItems}
                        name="product-list-actions"
                        value={action}
                        placeholder="Selecionar Ação..."
                        onChange={(v) => setAction(v)}
                    />
                </div>
                <Table
                    headers={['Product', 'Inventory', 'Price', 'Discount', 'Variants', 'Actions']}
                    keys={['productName', 'quantity', 'amount', null, null, null]}
                    rows={products}
                >
                    <div className="flex justify-end">
                        <div className="text-left text-xs leading-4 text-hypay-pink">
                            <div>Copy link</div>
                            <div>Edit</div>
                            <div className="font-bold">Delete</div>
                        </div>
                    </div>
                </Table>
            </div>
        </PrimaryLayout>
    )
}

export default Products
