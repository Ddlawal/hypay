import * as React from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../components/Layout'
import { Button } from '../../../components/Button'
import { CircularPlusIcon } from '../../../components/Icons/CircularPlusIcon'
import { useGetAllProductsQuery } from '../../../services/productAndOrders'
import { Table } from '../../../components/Table'
import { ImportIcon, MenuIcon } from '../../../components/Icons'
import { useRouter } from 'next/router'

const productActionSelectItems = [
    {
        title: 'Apagar',
        onClick: () => console.log(1),
    },
    {
        title: 'Ativar na loja',
        onClick: () => console.log(1),
    },
    {
        title: 'Desativar na loja',
        onClick: () => console.log(1),
    },
    {
        title: 'Alterar preço',
        onClick: () => console.log(1),
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
    const { data: products } = useGetAllProductsQuery()
    const { push } = useRouter()
    const gotoAddProducts = () => push('/dashboard/products/addProduxts')

    if (products?.length === 0) {
        return (
            <PrimaryLayout>
                <NoProducts />
            </PrimaryLayout>
        )
    }

    return (
        <PrimaryLayout>
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
                <select name="product" id="profuct">
                    <option value="">Selecionar Ação...</option>
                </select>
                <Table
                    headers={['Product', 'Inventory', 'Price', 'Discount', 'Variants', 'Actions']}
                    keys={[]}
                    rows={[]}
                />
            </div>
        </PrimaryLayout>
    )
}

export default Products
