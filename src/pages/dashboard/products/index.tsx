import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../components/Layout'
import { Button } from '../../../components/Button'
import { CircularPlusIcon } from '../../../components/Icons/CircularPlusIcon'
import { AddAProduct } from '../../../components/CreateAStore/AddAProduct'
import { useGetAllProductsMutation } from '../../../services/productAndOrders'

const products = [
    {
        name: 'Alcatel',
    },
]

const NoProducts = () => {
    const [getProduct, { data }] = useGetAllProductsMutation()

    // const getData = function () {
    //     const dat = await getProduct()
    //         .unwrap()
    //         .then((data) => console.log(data))
    //         .catch((err) => console.log(err))
    //     console.log(dat, 'dat in useEffect')
    // }

    // useEffect(() => {
    //     getData()
    // }, [])
    console.log(getProduct, data, 'the data')
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
    if (products.length === 0) {
        return (
            <PrimaryLayout>
                <NoProducts />
            </PrimaryLayout>
        )
    }

    return (
        <PrimaryLayout>
            <div>
                <AddAProduct />
            </div>
        </PrimaryLayout>
    )
}

export default Products
